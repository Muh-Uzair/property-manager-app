import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";

// COMPONENT START
export default function RentFormReceivedPayment() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <>
      <FormPortion>
        <FormItem
          itemType={{ type: "labelCheckBox" }}
          itemLabel={"received payment"}
          htmlFor={"receivedPaymentCheck"}
          id={"receivedPaymentCheck"}
        />
      </FormPortion>
    </>
  );
  // JSX
}
// COMPONENT END
