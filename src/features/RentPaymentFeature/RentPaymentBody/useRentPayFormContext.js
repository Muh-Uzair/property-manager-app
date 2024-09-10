import { useContext } from "react";
import { RentPayFormContext } from "./RentPayAccordionBody";

export function useRentPayFormContext() {
  const {
    receivedPayment,
    setReceivedPayment,
    getValues,
    amountReceived,
    setAmountReceived,
  } = useContext(RentPayFormContext);

  return {
    receivedPayment,
    setReceivedPayment,
    getValues,
    amountReceived,
    setAmountReceived,
  };
}
