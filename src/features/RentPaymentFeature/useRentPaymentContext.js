import { useContext } from "react";
import { RentPaymentContext } from "./RentPayment";

export function useRentPaymentContext() {
  const { isSearchingProperty, setIsSearchingProperty } =
    useContext(RentPaymentContext);

  return { isSearchingProperty, setIsSearchingProperty };
}
