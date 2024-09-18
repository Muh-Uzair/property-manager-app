import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import FormItem from "../../../ui/FormItem";
import { useGetDueMonths } from "./useGetDueMonths";
import { useContext } from "react";
import { RentPayFormContext } from "./RentPayAccordionBody";
import { helperUpdateAmountReceived } from "../../../utils/helpers";

// COMPONENT START
export default function RentFormPaymentReceivedOf({
  occupiedProperty,
  register,
}) {
  // VARIABLES
  const { amountReceived, setAmountReceived } = useContext(RentPayFormContext);
  const { dueMonths, stOccupiedProperty, setStOccupiedProperty } =
    useGetDueMonths(occupiedProperty || {});

  // FUNCTION to update the amount received
  function updateAmountReceived(e) {
    helperUpdateAmountReceived(
      e,
      setAmountReceived,
      occupiedProperty,
      stOccupiedProperty,
      setStOccupiedProperty,
    );
  }

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
