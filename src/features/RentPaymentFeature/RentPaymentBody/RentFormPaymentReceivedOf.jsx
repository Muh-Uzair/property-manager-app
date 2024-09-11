import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import FormItem from "../../../ui/FormItem";
import { useRentPayFormContext } from "./useRentPayFormContext";
import { useGetDueMonths } from "./useGetDueMonths";

// COMPONENT START
export default function RentFormPaymentReceivedOf({
  occupiedProperty,
  register,
}) {
  // VARIABLES
  const { amountReceived, setAmountReceived } = useRentPayFormContext();
  const { dueMonths } = useGetDueMonths(occupiedProperty || {});

  // FUNCTION to update the amount received
  function updateAmountReceived(e) {
    let paid = e.target.value === "true" ? false : true;
    if (paid) {
      setAmountReceived(
        (amountReceived) => (amountReceived += occupiedProperty?.rent),
      );
    }

    if (!paid)
      setAmountReceived(
        (amountReceived) => (amountReceived -= occupiedProperty?.rent),
      );
  }

  // FUNCTION make

  // JSX
  return (
    <>
      {" "}
      <FormPortion formPortionHeading={"Payment received of "}>
        <ul>
          {dueMonths.map((val, i) => (
            <li key={i}>
              <FormItem
                itemType={{ type: "labelCheckBox" }}
                itemLabel={val.month}
                htmlFor={`rfPaymentReceived${val.month}`}
                id={`rfPaymentReceived${val.month}`}
                name={`rfPaymentReceived${val.month}`}
                register={register}
                controlled={true}
                onChangeFunc={updateAmountReceived}
                disabled={val.disabled}
              />
            </li>
          ))}
        </ul>

        <FormItem
          itemLabel={"Amount Received"}
          itemType={{
            type: "labelInputText",
            readOnly: true,
          }}
          itemValueColor="green"
          incomeInput={true}
          htmlFor={"rfAmountReceived"}
          id={"rfAmountReceived"}
          name={"rfAmountReceived"}
          register={register}
          controlled={true}
          controllerStVar={amountReceived}
          validationObj={{ required: true }}
        />
      </FormPortion>
    </>
  );
  // JSX
}

RentFormPaymentReceivedOf.propTypes = {
  occupiedProperty: PropTypes.object,
  register: PropTypes.func,
};
// COMPONENT END
