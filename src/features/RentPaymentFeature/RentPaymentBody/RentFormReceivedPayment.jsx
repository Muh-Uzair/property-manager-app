import PropTypes from "prop-types";

import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import { useRentPayFormContext } from "./useRentPayFormContext";

// COMPONENT START
export default function RentFormReceivedPayment({ register }) {
  // VARIABLES
  const { getValues, amountReceived } = useRentPayFormContext();

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
          validationObj={{
            required: "Please receive the amount",
            validate: () =>
              Number(getValues("rfAmountReceived")) === 0 ||
              "Amount received must be greater than 0",
          }}
          disabled={Number(amountReceived) === 0}
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
