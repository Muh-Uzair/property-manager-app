import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import FormItem from "../../../ui/FormItem";
import { monthsArr } from "../../../utils/constants";
import { calculateDues, getLastPaidMonth } from "../../../utils/helpers";

// COMPONENT START
export default function RentFormRentDetails({ occupiedProperty, register }) {
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
          htmlFor={"rfRentProperty"}
          id={"rfRentProperty"}
          name={"rfRentProperty"}
          register={register}
        />
        <FormItem
          itemLabel={"Last Rent Paid"}
          itemType={{
            type: "labelInputText",
            value: `${monthsArr[getLastPaidMonth(occupiedProperty.rent_details)]}`,
            disabled: true,
          }}
          htmlFor={"rfRentLastMonthPaid"}
          id={"rfRentLastMonthPaid"}
          name={"rfRentLastMonthPaid"}
          register={register}
        />
        <FormItem
          itemLabel={"Current Month"}
          itemType={{
            type: "labelInputText",
            value: `${monthsArr[new Date().getMonth()]}`,
            disabled: true,
          }}
          htmlFor={"rfRentCurrentMonth"}
          id={"rfRentCurrentMonth"}
          name={"rfRentCurrentMonth"}
          register={register}
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
          htmlFor={"rfRentDueAmount"}
          id={"rfRentDueAmount"}
          name={"rfRentDueAmount"}
          register={register}
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
          htmlFor={"rfRentDueMonths"}
          id={"rfRentDueMonths"}
          name={"rfRentDueMonths"}
          register={register}
        />
      </FormPortion>
    </>
  );
  // JSX
}

RentFormRentDetails.propTypes = {
  occupiedProperty: PropTypes.object,
  register: PropTypes.func,
};
// COMPONENT END
