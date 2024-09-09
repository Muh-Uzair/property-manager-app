import { useContext } from "react";
import { RentPayFormContext } from "./RentPayAccordionBody";

// FUNCTION
export function useRentPayFormContext() {
  const { receivedPayment, setReceivedPayment } =
    useContext(RentPayFormContext);

  return { receivedPayment, setReceivedPayment };
}
