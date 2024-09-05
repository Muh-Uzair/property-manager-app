import PropTypes from "prop-types";

import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";

// COMPONENT START
export default function RentPayAccordionBody({ occupiedProperty }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <form className="h-[300px] w-[100%] rounded-[5px] border border-gray-200/50 bg-gray-50/50 px-[5px] py-[10px]">
      {/* Property Details */}
      <FormPortion formPortionHeading={"Property Details"}>
        <FormItem
          itemLabel={"Property"}
          itemType={{
            type: "labelInputText",
            value: `Flat ${occupiedProperty.flat_number ?? occupiedProperty.shop_number ?? occupiedProperty.room_number}`,

            disabled: true,
          }}
        />
        <FormItem
          itemLabel={"Floor"}
          itemType={{
            type: "labelInputText",
            value: "Floor 3",
            disabled: true,
          }}
        />
        <FormItem
          itemLabel={"Size"}
          itemType={{
            type: "labelInputText",
            value: "Floor 3",
            disabled: true,
          }}
        />
      </FormPortion>

      {/* Tenant details */}
      <FormPortion formPortionHeading={"Tenant Details"}></FormPortion>

      {/* Rent details */}
      <FormPortion formPortionHeading={"Rent Details"}></FormPortion>

      {/* others */}
      <FormPortion formPortionHeading={"Others"}>
        <FormItem
          itemType={{ type: "labelCheckBox" }}
          itemLabel={"received payment"}
        />
      </FormPortion>
    </form>
  );
  // JSX
}

RentPayAccordionBody.propTypes = {
  occupiedProperty: PropTypes.object,
};
// COMPONENT END
