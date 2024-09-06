import PropTypes from "prop-types";

import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";

// COMPONENT START
export default function RentPayAccordionBody({ occupiedProperty }) {
  // VARIABLES
  const propertyType = useGetPropertyType();

  // FUNCTIONS

  // JSX
  return (
    <form className="w-[100%] rounded-[5px] border border-gray-200/50 bg-gray-50/50 px-[5px] py-[10px]">
      {/* Property Details */}
      <FormPortion formPortionHeading={"Property Details"}>
        <FormItem
          itemLabel={"Property"}
          itemType={{
            type: "labelInputText",
            value: `${propertyType.at(0).toUpperCase()}${propertyType.slice(1, -1)}  ${occupiedProperty.flat_number ?? occupiedProperty.shop_number ?? occupiedProperty.room_number}`,

            disabled: true,
          }}
        />
        <FormItem
          itemLabel={"Floor"}
          itemType={{
            type: "labelInputText",
            value: `Floor ${occupiedProperty.floor}`,
            disabled: true,
          }}
        />
        <FormItem
          itemLabel={"Size"}
          itemType={{
            type: "labelInputText",
            value: `${occupiedProperty.size} m`,
            disabled: true,
          }}
        />
      </FormPortion>

      {/* Tenant details */}
      <FormPortion formPortionHeading={"Tenant Details"}>
        <FormItem
          itemLabel={"Name"}
          itemType={{
            type: "labelInputText",
            value: `Kim`,
            disabled: true,
          }}
        />
        <FormItem
          itemLabel={"Nationality"}
          itemType={{
            type: "labelInputText",
            value: `USA`,
            disabled: true,
          }}
        />
        <FormItem
          itemLabel={"Contact"}
          itemType={{
            type: "labelInputText",
            value: `9734934938`,
            disabled: true,
          }}
        />
        <FormItem
          itemLabel={"ID"}
          itemType={{
            type: "labelInputText",
            value: `9734934938`,
            disabled: true,
          }}
        />
        <FormItem
          itemLabel={"Occupation"}
          itemType={{
            type: "labelInputText",
            value: `SWE`,
            disabled: true,
          }}
        />
      </FormPortion>

      {/* Rent details */}
      <FormPortion formPortionHeading={"Rent Details"}></FormPortion>

      {/* others */}
      <FormPortion formPortionHeading={"Others"} last={true}>
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
