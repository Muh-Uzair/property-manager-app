import { createContext, useState } from "react";
import RentPaymentBody from "./RentPaymentBody/RentPaymentBody";
import RentPaymentHeader from "./RentPaymentHeader/RentPaymentHeader";

export const RentPaymentContext = createContext();

// COMPONENT START
export default function RentPayment() {
  // VARIABLES
  const [isSearchingProperty, setIsSearchingProperty] = useState(false);

  // JSX
  return (
    <RentPaymentContext.Provider
      value={{ isSearchingProperty, setIsSearchingProperty }}
    >
      <div className={`grid h-[100%] w-[100%] grid-rows-[auto_1fr] gap-[10px]`}>
        <RentPaymentHeader />
        <RentPaymentBody />
      </div>
    </RentPaymentContext.Provider>
  );
  // JSX
}
// COMPONENT END
