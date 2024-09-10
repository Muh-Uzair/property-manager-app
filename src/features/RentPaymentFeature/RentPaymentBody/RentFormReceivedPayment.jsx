import PropTypes from "prop-types";

import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";

// COMPONENT START
export default function RentFormReceivedPayment({ register }) {
  // VARIABLES

  // FUNCTION

  // JSX
  return (
    <>
      <FormPortion>
        <FormItem
          itemType={{ type: "labelCheckBox" }}
          itemLabel={"received payment"}
          htmlFor={"rfReceivedPaymentCheck"}
          id={"rfReceivedPaymentCheck"}
          name={"rfReceivedPaymentCheck"}
          register={register}
          required={true}
        />
      </FormPortion>
    </>
  );
  // JSX
}

RentFormReceivedPayment.propTypes = {
  register: PropTypes.func,
};
// COMPONENT END
