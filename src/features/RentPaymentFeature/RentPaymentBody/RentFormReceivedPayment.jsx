import PropTypes from "prop-types";

import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import { useRentPayFormContext } from "./useRentPayFormContext";

// COMPONENT START
export default function RentFormReceivedPayment({ register }) {
  // VARIABLES
  const { receivedPayment, setReceivedPayment } = useRentPayFormContext();

  // FUNCTION
  function toggleReceivedPaymentCheck() {
    setReceivedPayment((receivedPayment) => !receivedPayment);
  }

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
          controllerStVar={receivedPayment}
          onChangeFunc={toggleReceivedPaymentCheck}
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
