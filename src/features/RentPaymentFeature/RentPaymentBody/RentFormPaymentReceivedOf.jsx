import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import FormItem from "../../../ui/FormItem";
import { getDueMonths, getLastPaidMonth } from "../../../utils/helpers";

// COMPONENT START
export default function RentFormPaymentReceivedOf({ occupiedProperty }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <>
      {" "}
      <FormPortion formPortionHeading={"Payment received of "}>
        <ul>
          {getDueMonths(getLastPaidMonth(occupiedProperty.rent_details)).map(
            (month, i) => (
              <li key={i}>
                <FormItem
                  itemType={{ type: "labelCheckBox" }}
                  itemLabel={month}
                  htmlFor={`paymentReceived${month}`}
                  id={`paymentReceived${month}`}
                />
              </li>
            ),
          )}
        </ul>

        <FormItem
          itemLabel={"Amount Received"}
          itemType={{
            type: "labelInputText",
            value: 15000,
            disabled: true,
          }}
          itemValueColor="green"
          income={true}
          htmlFor={"amountReceived"}
          id={"amountReceived"}
        />
      </FormPortion>
    </>
  );
  // JSX
}

RentFormPaymentReceivedOf.propTypes = {
  occupiedProperty: PropTypes.object,
};
// COMPONENT END
