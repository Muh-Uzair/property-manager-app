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

// COMPONENT START
export default function RentPayAccordionBody({ occupiedProperty }) {
  // VARIABLES
  let { dataTenantDetailRentForm, statusTenantDetailRentForm } =
    useGetTenantDetailRentForm(occupiedProperty.renter_id);
  dataTenantDetailRentForm = dataTenantDetailRentForm?.data?.[0] ?? {};
  const { register, handleSubmit } = useForm();

  // FUNCTION

  function rentPayFormSubmit(data) {
    console.log(data);
  }

  // JSX
  if (statusTenantDetailRentForm === "pending") {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner size={25} />
      </LoadingWrapperCenter>
    );
  }
  if (Object.entries(dataTenantDetailRentForm).length > 0) {
    return (
      <form
        className="w-[100%] rounded-[5px] border border-gray-300 bg-gray-50/50 px-[7px] py-[10px]"
        onSubmit={handleSubmit(rentPayFormSubmit)}
        id={"rentPaymentForm"}
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
          <div className="flex justify-end">
            <Button type="primary" uppercase={true}>
              Pay Rent
            </Button>
          </div>
        </FormPortion>
      </form>
    );
  }
  // JSX
}

RentPayAccordionBody.propTypes = {
  occupiedProperty: PropTypes.object,
};
// COMPONENT END
