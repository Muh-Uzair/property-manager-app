import RentPaymentBody from "./RentPaymentBody/RentPaymentBody";
import RentPaymentHeader from "./RentPaymentHeader/RentPaymentHeader";

// COMPONENT START
export default function RentPayment() {
  // VARIABLES

  // JSX
  return (
    <div className={`grid h-[100%] w-[100%] grid-rows-[auto_1fr] gap-[10px]`}>
      <RentPaymentHeader />
      <RentPaymentBody />
    </div>
  );
  // JSX
}
// COMPONENT END
