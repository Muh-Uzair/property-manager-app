import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import FormItem from "../../../ui/FormItem";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";

// COMPONENT START
export default function RentFormPropertyDetails({ occupiedProperty }) {
  // VARIABLES

  const propertyType = useGetPropertyType();

  // FUNCTIONS

  // JSX
  return (
    <>
      <FormPortion formPortionHeading={"Property Details"}>
        <FormItem
          itemLabel={"Property"}
          itemType={{
            type: "labelInputText",
            value: `${propertyType.at(0).toUpperCase()}${propertyType.slice(1, -1)}  ${occupiedProperty.flat_number ?? occupiedProperty.shop_number ?? occupiedProperty.room_number}`,

            disabled: true,
          }}
          htmlFor={"propertyNumber"}
          id={"propertyNumber"}
        />
        <FormItem
          itemLabel={"Floor"}
          itemType={{
            type: "labelInputText",
            value: `Floor ${occupiedProperty.floor}`,
            disabled: true,
          }}
          htmlFor={"propertyFloor"}
          id={"propertyFloor"}
        />
        <FormItem
          itemLabel={"Size"}
          itemType={{
            type: "labelInputText",
            value: `${occupiedProperty.size} m`,
            disabled: true,
          }}
          htmlFor={"propertySize"}
          id={"propertySize"}
        />
      </FormPortion>
    </>
  );
  // JSX
}

RentFormPropertyDetails.propTypes = {
  occupiedProperty: PropTypes.object,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
