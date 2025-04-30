import { useSearchParams } from "react-router-dom";
import { useGetRentDetailsPropId } from "./useGetRentDetailsPropId";
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { useState } from "react";
import { useTenantPayRent } from "./useTenantPayRent";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

// Notification component for unpaid rent
const RentNotifications = ({ unpaidMonths = [], rentAmount = 0 }) => {
  const [dismissed, setDismissed] = useState(false);

  if (!unpaidMonths || unpaidMonths.length === 0 || dismissed) return null;

  // Calculate total due amount
  const totalDue = unpaidMonths.length * rentAmount;

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="mb-6 overflow-hidden rounded-lg border border-amber-300 bg-amber-50 shadow-sm">
      <div className="flex items-center justify-between bg-amber-100 px-4 py-3">
        <div className="flex items-center">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-white">
            {unpaidMonths.length}
          </div>
          <h3 className="ml-2 font-semibold text-amber-800">
            Rent Payment Reminders
          </h3>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-amber-700 hover:text-amber-900"
          aria-label="Dismiss notifications"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-3 px-4 py-3">
        <div className="rounded-md bg-white p-3 shadow-sm">
          <div className="mb-2 border-b border-dashed border-amber-200 pb-2">
            <span className="text-sm font-medium text-amber-800">
              Total Outstanding
            </span>
            <div className="mt-1 text-lg font-bold text-amber-900">
              {formatCurrency(totalDue)}
            </div>
          </div>

          <div className="space-y-2">
            {unpaidMonths.map((month, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-amber-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  Your rent of{" "}
                  <span className="font-medium">
                    {formatCurrency(rentAmount)}
                  </span>{" "}
                  for{" "}
                  <span className="font-medium capitalize">{month.month}</span>{" "}
                  is due.
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-amber-600">
          Please select the months you want to pay and click &quot;Pay
          rent&quot; button below.
        </p>
      </div>
    </div>
  );
};

// PropTypes validation for RentNotifications
RentNotifications.propTypes = {
  unpaidMonths: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      paid: PropTypes.bool.isRequired,
    }),
  ),
  rentAmount: PropTypes.number,
};

const TenantOperationRentPayment = () => {
  // VARS
  const [searchParams] = useSearchParams();
  const propertyType = searchParams.get("propertyType");
  const propertyId = searchParams.get("propertyId");
  const currentMonth = Number(new Date().getMonth()) + 1;
  const { data: propertyRentData, status: statusPropertyRentDetails } =
    useGetRentDetailsPropId(propertyType, propertyId);
  const { register, handleSubmit } = useForm();
  const [amountToPay, setAmountToPay] = useState(0);
  const rentAmount = propertyRentData?.rent;
  const unpaidRentMonths = propertyRentData?.data;
  const { mutateTenantPayRent, pendingTenantPayRent } = useTenantPayRent();

  // HANDLE SUBMIT
  const onSubmit = (data) => {
    const selectedMonths = Object.keys(data).filter(
      (key) => data[key] === true,
    );

    if (selectedMonths.length === 0) {
      toast.error("Please select at least one month to pay rent");
      return;
    }

    mutateTenantPayRent({ selectedMonths, unpaidRentMonths, setAmountToPay });
  };

  if (statusPropertyRentDetails === "pending")
    return (
      <div className="flex h-[100vh] w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  if (propertyRentData?.data.length === 0) {
    return (
      <div className="flex h-[100vh] w-full items-center justify-center">
        <span>No amount due</span>
      </div>
    );
  }

  return (
    <div>
      {/* Notifications for unpaid rent */}
      <RentNotifications
        unpaidMonths={unpaidRentMonths}
        rentAmount={rentAmount}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-[5px] border-[1px] border-gray-400 p-[10px]"
      >
        <div className="mb-4 font-medium">Select months to pay:</div>
        {propertyRentData?.data?.map((val, i) =>
          i < currentMonth ? (
            <div key={i} className="mb-2 flex items-center">
              <input
                type="checkbox"
                id={`month-${val.month}`}
                className="mr-[10px] h-4 w-4 cursor-pointer"
                {...register(val.month)}
                onChange={(e) => {
                  setAmountToPay((prev) =>
                    e.target.checked ? prev + rentAmount : prev - rentAmount,
                  );
                }}
              />
              <label
                htmlFor={`month-${val.month}`}
                className="cursor-pointer capitalize"
              >
                {val?.month}
              </label>
            </div>
          ) : null,
        )}

        <div className="mt-[20px] rounded-md bg-gray-50 p-3">
          <p className="text-sm text-gray-600">
            Amount to be paid :{" "}
            <span className="text-lg font-bold text-green-600">
              ${amountToPay}
            </span>
          </p>
        </div>

        <button
          type="submit"
          disabled={pendingTenantPayRent}
          className="mt-[20px] w-full rounded-[5px] border-[1px] border-sky-500 px-[10px] py-[8px] font-medium text-sky-500 hover:bg-sky-50 disabled:opacity-50"
        >
          {!pendingTenantPayRent ? "Pay rent" : "Paying rent..."}
        </button>
      </form>
    </div>
  );
};

export default TenantOperationRentPayment;
