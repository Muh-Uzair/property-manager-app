import PropTypes from "prop-types";

import SinglePropertyDetailsItem from "@/features/ShowPropertyDetails/showSinglePropertyDetails/SinglePropertyDetailsItem";
import { useGetPropertyType } from "@/hooks/useGetPropertyType";

// COMPONENT START
export default function PropertyDetailsCardFormat({ propertyData, itemGap }) {
  // VARIABLES
  const propertyType = useGetPropertyType();

  // FUNCTIONS

  // JSX
  return (
    <>
      {/* property details div */}
      <div className={`grid grid-cols-2 gap-[${itemGap}]`}>
        <SinglePropertyDetailsItem
          itemHeading="Id No"
          itemValue={propertyData?.id}
        />

        <SinglePropertyDetailsItem
          itemHeading={`${propertyType.charAt(0).toLocaleUpperCase()}${propertyType.slice(1, propertyType.length - 1)} No`}
          itemValue={
            propertyData?.flat_number ||
            propertyData?.room_number ||
            propertyData?.shop_number
          }
        />

        <SinglePropertyDetailsItem
          itemHeading="Rent"
          itemValue={propertyData?.rent}
        />

        <SinglePropertyDetailsItem
          itemHeading="Floor"
          itemValue={propertyData?.floor}
        />

        <SinglePropertyDetailsItem
          itemHeading="Size"
          itemValue={propertyData?.size}
        />

        <SinglePropertyDetailsItem
          itemHeading="Status"
          itemValue={propertyData?.status}
        />
      </div>
    </>
  );
  // JSX
}

PropertyDetailsCardFormat.propTypes = {
  propertyData: PropTypes.object,
  itemGap: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
