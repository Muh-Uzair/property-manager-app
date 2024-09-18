import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import FormItem from "../../../ui/FormItem";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";

// COMPONENT START
export default function RentFormPropertyDetails({
  occupiedProperty,
  register,
}) {
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
            value: `${propertyType.at(0).toUpperCase()}${propertyType.slice(1, -1)}  ${occupiedProperty?.flat_number ?? occupiedProperty?.shop_number ?? occupiedProperty?.room_number}`,

            readOnly: true,
          }}
          htmlFor={"rfPropertyNumber"}
          id={"rfPropertyNumber"}
          name={"rfPropertyNumber"}
          register={register}
        />

        <FormItem
          itemLabel={"Floor"}
          itemType={{
            type: "labelInputText",
            value: `Floor ${occupiedProperty?.floor}`,
            readOnly: true,
          }}
          htmlFor={"rfPropertyFloor"}
          id={"rfPropertyFloor"}
          name={"rfPropertyFloor"}
          register={register}
        />

        <FormItem
          itemLabel={"Size"}
          itemType={{
            type: "labelInputText",
            value: `${occupiedProperty?.size} m`,
            readOnly: true,
          }}
          htmlFor={"rfPropertySize"}
          id={"rfPropertySize"}
          name={"rfPropertySize"}
          register={register}
        />
      </FormPortion>
    </>
  );
  // JSX
}

RentFormPropertyDetails.propTypes = {
  occupiedProperty: PropTypes.object,
  register: PropTypes.func,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
