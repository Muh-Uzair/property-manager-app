import { useSearchParams } from "react-router-dom";
import { useGetRentDetailsPropId } from "./useGetRentDetailsPropId";
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { useState } from "react";

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
  const rentDetails = propertyRentData?.data;

  console.log(rentDetails);

  // HANDLE SUBMIT
  const onSubmit = (data) => {
    const selectedMonths = Object.keys(data).filter(
      (key) => data[key] === true,
    );
    console.log("Selected months for rent payment:", selectedMonths);
    // You can now send this data to Supabase or your backend
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-[5px] border-[1px] border-gray-400 p-[10px]"
      >
        {propertyRentData?.data?.map((val, i) =>
          i < currentMonth ? (
            <div key={i}>
              <input
                type="checkbox"
                className="mr-[10px]"
                {...register(val.month)}
                onChange={(e) => {
                  setAmountToPay((prev) =>
                    e.target.checked ? prev + rentAmount : prev - rentAmount,
                  );
                }}
              />
              <label>{val?.month}</label>
            </div>
          ) : null,
        )}

        <div className="mt-[20px]">
          <p>
            Amount to be paid :{" "}
            <span className="text-green-500">{amountToPay}</span>
          </p>
        </div>

        <button
          type="submit"
          className="mt-[20px] rounded-[5px] border-[1px] border-sky-500 px-[10px] py-[5px] text-sky-500"
        >
          Pay rent
        </button>
      </form>
    </div>
  );
};

export default TenantOperationRentPayment;
