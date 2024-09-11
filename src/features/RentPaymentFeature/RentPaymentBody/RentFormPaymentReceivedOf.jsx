import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import FormItem from "../../../ui/FormItem";
import { getDueMonths, getLastPaidMonth } from "../../../utils/helpers";
import { useRentPayFormContext } from "./useRentPayFormContext";
import { useRef } from "react";

// COMPONENT START
export default function RentFormPaymentReceivedOf({
  occupiedProperty,
  register,
}) {
  // VARIABLES
  const { amountReceived, setAmountReceived } = useRentPayFormContext();
  const indexLastPaidMonth = useRef(
    getLastPaidMonth(occupiedProperty.rent_details),
  );

  // FUNCTION to update the amount received
  function updateAmountReceived(e) {
    let paid = e.target.value === "true" ? false : true;
    if (paid)
      setAmountReceived(
        (amountReceived) => (amountReceived += occupiedProperty?.rent),
      );
    if (!paid)
      setAmountReceived(
        (amountReceived) => (amountReceived -= occupiedProperty?.rent),
      );
  }

  // JSX
  return (
    <>
      {" "}
      <FormPortion formPortionHeading={"Payment received of "}>
        <ul>
          {getDueMonths(indexLastPaidMonth.current).map((month, i) => (
            <li key={i}>
              <FormItem
                itemType={{ type: "labelCheckBox" }}
                itemLabel={month}
                htmlFor={`rfPaymentReceived${month}`}
                id={`rfPaymentReceived${month}`}
                name={`rfPaymentReceived${month}`}
                register={register}
                controlled={true}
                onChangeFunc={updateAmountReceived}
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
