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
  const { dueMonths, stOccupiedProperty, setStOccupiedProperty } =
    useGetDueMonths(occupiedProperty || {});

  // FUNCTION to update the amount received
  function updateAmountReceived(e) {
    let paid = e.target.value === "true" ? false : true;
    if (paid) {
      console.log("paid");
      console.log(stOccupiedProperty);
      setAmountReceived(
        (amountReceived) => (amountReceived += occupiedProperty?.rent),
      );

      let newStOccupiedProperty = [];
      let flag = true;
      for (let i = 0; i < stOccupiedProperty?.length; i++) {
        if (
          flag === true &&
          (stOccupiedProperty[i].paid === null ||
            stOccupiedProperty[i].paid === false)
        ) {
          newStOccupiedProperty.push({ ...stOccupiedProperty[i], paid: true });
          flag = false;
          continue;
        } else {
          newStOccupiedProperty.push({ ...stOccupiedProperty[i] });
          continue;
        }
      }

      console.log(newStOccupiedProperty);

      setStOccupiedProperty(newStOccupiedProperty);
    } else if (!paid) {
      console.log("removed");
      console.log(stOccupiedProperty);
      setAmountReceived(
        (amountReceived) => (amountReceived -= occupiedProperty?.rent),
      );

      let newStOccupiedProperty = [];
      let flag = true;
      for (let i = stOccupiedProperty.length - 1; i >= 0; i--) {
        if (flag === true && stOccupiedProperty[i].paid === true) {
          newStOccupiedProperty.push({ ...stOccupiedProperty[i], paid: false });
          flag = false;
          continue;
        } else {
          newStOccupiedProperty.push({ ...stOccupiedProperty[i] });
          continue;
        }
      }

      newStOccupiedProperty = newStOccupiedProperty.reverse();
      console.log(newStOccupiedProperty);

      setStOccupiedProperty(newStOccupiedProperty);
    }
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

// // 2:
// let newStOccupiedProperty = [];
// let flag = true;
// for (let i = 0; i < stOccupiedProperty?.length; i++) {
//   if (
//     flag === true &&
//     (stOccupiedProperty[i].paid === false ||
//       stOccupiedProperty[i].paid === null)
//   ) {
//     newStOccupiedProperty.push({ ...stOccupiedProperty[i], paid: true });
//     flag = false;
//     continue;
//   } else newStOccupiedProperty.push({ ...stOccupiedProperty[i] });
// }

// setStOccupiedProperty(newStOccupiedProperty);
