import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import LoadingWrapperCenter from "../../../ui/LoadingWrapperCenter";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import Button from "../../../ui/Button";
import RentFormPropertyDetails from "./RentFormPropertyDetails";
import RentFormRentDetails from "./RentFormRentDetails";
import RentFormTenantDetails from "./RentFormTenantDetails";
import { useGetTenantDetailRentForm } from "./useGetTenantDetailRentForm";
import RentFormPaymentReceivedOf from "./RentFormPaymentReceivedOf";
import RentFormReceivedPayment from "./RentFormReceivedPayment";
import { useForm } from "react-hook-form";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { usePayRent } from "./usePayRent";

export const RentPayFormContext = createContext();

// COMPONENT START
export default function RentPayAccordionBody({ occupiedProperty }) {
  // VARIABLES
  let { dataTenantDetailRentForm, statusTenantDetailRentForm } =
    useGetTenantDetailRentForm(occupiedProperty.renter_id);
  dataTenantDetailRentForm = dataTenantDetailRentForm?.data?.[0] ?? {};
  const { register, handleSubmit, getValues } = useForm();
  const [receivedPayment, setReceivedPayment] = useState(false);
  const [amountReceived, setAmountReceived] = useState(0);
  const { mutatePayRent, statusPayRent } = usePayRent(setReceivedPayment);

  // FUNCTION executed when form is submitted
  function rentPayFormSubmit(data) {
    data.rfAmountReceived = amountReceived;
    mutatePayRent(data);
  }

  // FUNCTION executed when validation at any field fails
  function rentPayFormSubmitError(errors) {
    const { rfReceivedPaymentCheck: { message } = {} } = errors;
    toast(message, {
      duration: 4000,
      icon: <span>😢</span>,
      className: "text-red-700 font-semibold",
    });
  }

  // JSX
  if (Object.entries(dataTenantDetailRentForm).length > 0) {
    return (
      <RentPayFormContext.Provider
        value={{
          receivedPayment,
          setReceivedPayment,
          getValues,
          amountReceived,
          setAmountReceived,
        }}
      >
        <form
          className="w-[100%] rounded-[5px] border border-gray-300 bg-gray-50/50 px-[7px] py-[10px]"
          onSubmit={handleSubmit(rentPayFormSubmit, rentPayFormSubmitError)}
          id="rentPaymentForm"
          name="rentPaymentForm"
        >
          {/* Property Details */}
          <RentFormPropertyDetails
            occupiedProperty={occupiedProperty}
            register={register}
          />

          {/* Tenant details */}
          <RentFormTenantDetails
            dataTenantDetailRentForm={dataTenantDetailRentForm}
            register={register}
          />

          {/* Rent details */}
          <RentFormRentDetails
            occupiedProperty={occupiedProperty}
            register={register}
          />

          {/* payment received of months */}
          <RentFormPaymentReceivedOf
            occupiedProperty={occupiedProperty}
            register={register}
          />

          {/* received payment check */}
          <RentFormReceivedPayment register={register} />

          {/* submit button */}
          <FormPortion last={true}>
            <div
              id={"rfSubmitButton"}
              className="flex justify-end largeScreen:justify-start"
            >
              <Button
                disabled={statusPayRent === "pending"}
                type="primary"
                uppercase={true}
              >
                Pay Rent
              </Button>
            </div>
          </FormPortion>
        </form>
      </RentPayFormContext.Provider>
    );
  }
  if (statusTenantDetailRentForm === "pending") {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner size={25} />
      </LoadingWrapperCenter>
    );
  }
  // JSX
}

RentPayAccordionBody.propTypes = {
  occupiedProperty: PropTypes.object,
};
// COMPONENT END
