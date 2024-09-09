import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import FormItem from "../../../ui/FormItem";
import { getDueMonths, getLastPaidMonth } from "../../../utils/helpers";

// COMPONENT START
export default function RentFormPaymentReceivedOf({
  occupiedProperty,
  register,
}) {
  // VARIABLES

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
                  htmlFor={`rfPaymentReceived${month}`}
                  id={`rfPaymentReceived${month}`}
                  name={`rfPaymentReceived${month}`}
                  register={register}
                />
              </li>
            ),
          )}
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
