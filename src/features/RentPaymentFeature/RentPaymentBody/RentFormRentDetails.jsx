import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import FormItem from "../../../ui/FormItem";
import { monthsArr } from "../../../utils/constants";
import { calculateDues, getLastPaidMonth } from "../../../utils/helpers";

// COMPONENT START
export default function RentFormRentDetails({ occupiedProperty }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <>
      <FormPortion formPortionHeading={"Rent Details"}>
        <FormItem
          itemLabel={"Property Rent"}
          itemType={{
            type: "labelInputText",
            value: `${occupiedProperty.rent}`,
            disabled: true,
          }}
          htmlFor={"rentProperty"}
          id={"rentProperty"}
        />
        <FormItem
          itemLabel={"Last Rent Paid"}
          itemType={{
            type: "labelInputText",
            value: `${monthsArr[getLastPaidMonth(occupiedProperty.rent_details)]}`,
            disabled: true,
          }}
          htmlFor={"rentLastMonthPaid"}
          id={"rentLastMonthPaid"}
        />
        <FormItem
          itemLabel={"Current Month"}
          itemType={{
            type: "labelInputText",
            value: `${monthsArr[new Date().getMonth()]}`,
            disabled: true,
          }}
          htmlFor={"rentCurrentMonth"}
          id={"rentCurrentMonth"}
        />
        <FormItem
          itemLabel={"Due Amount"}
          itemType={{
            type: "labelInputText",
            value: calculateDues(
              getLastPaidMonth(occupiedProperty.rent_details),
              occupiedProperty.rent,
            ),
            disabled: true,
          }}
          itemValueColor="red"
          htmlFor={"rentDueAmount"}
          id={"rentDueAmount"}
        />
        <FormItem
          itemLabel={"Months Due"}
          itemType={{
            type: "labelInputText",
            value:
              new Date().getMonth() -
              getLastPaidMonth(occupiedProperty.rent_details),
            disabled: true,
          }}
          itemValueColor="red"
          htmlFor={"rentDueMonths"}
          id={"rentDueMonths"}
        />
      </FormPortion>
    </>
  );
  // JSX
}

RentFormRentDetails.propTypes = {
  occupiedProperty: PropTypes.object,
};
// COMPONENT END
