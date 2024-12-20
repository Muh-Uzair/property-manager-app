import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useContext } from "react";

import Heading from "../../ui/Heading";
import SinglePropertyDetailsItem from "./SinglePropertyDetailsItem";
import PropertyDetailsCardFormat from "@/ui/PropertyDetailsCardFormat";
import { ContextSingleProperty } from "./SinglePropertyDetails";

const itemGap = "7px";

// COMPONENT START

export default function PropertyDetails() {
  // VARIABLES
  const { propertyType } = useParams();

  let { dataSingleProperty } = useContext(ContextSingleProperty);
  dataSingleProperty = dataSingleProperty?.data?.[0];

  // FUNCTIONS

  // JSX

  return (
    <div className="flex flex-col largeScreen:grid largeScreen:h-full largeScreen:grid-rows-[auto_1fr]">
      <Heading type="primary">
        {" "}
        {`${propertyType.charAt(0).toLocaleUpperCase()}${propertyType.slice(1, propertyType.length - 1)} Details`}
      </Heading>

      {/* DIVIDER Image + detail for LScreen */}
      <div className="hidden gap-[16px] largeScreen:grid largeScreen:h-full largeScreen:grid-cols-[60%_1fr] largeScreen:rounded-[8px] largeScreen:bg-sky-200/80 largeScreen:p-[16px]">
        {/* image div */}
        <div className="flex items-center justify-center rounded-[8px] bg-gray-100">
          <div className="h-full max-h-[328px] w-full">
            <img
              className="h-full w-full rounded-[8px] object-cover"
              src={dataSingleProperty?.image}
            />
          </div>
        </div>
        {/* property details div */}
        <div className="largeScreen:grid largeScreen:grid-cols-2 largeScreen:gap-[16px]">
          <SinglePropertyDetailsItem
            itemHeading="Id No"
            itemValue={dataSingleProperty?.id}
          />

          <SinglePropertyDetailsItem
            itemHeading={`${propertyType.charAt(0).toLocaleUpperCase()}${propertyType.slice(1, propertyType.length - 1)} No`}
            itemValue={
              dataSingleProperty?.flat_number ||
              dataSingleProperty?.room_number ||
              dataSingleProperty?.shop_number
            }
          />

          <SinglePropertyDetailsItem
            itemHeading="Rent"
            itemValue={dataSingleProperty?.rent}
          />

          <SinglePropertyDetailsItem
            itemHeading="Floor"
            itemValue={dataSingleProperty?.floor}
          />

          <SinglePropertyDetailsItem
            itemHeading="Size"
            itemValue={dataSingleProperty?.size}
          />

          <SinglePropertyDetailsItem
            itemHeading="Status"
            itemValue={dataSingleProperty?.status}
          />
        </div>
      </div>

      {/* DIVIDER Image + details for phone STab , LTab */}
      <div
        className={`grid grid-rows-[160px_auto] gap-[7px] rounded-[8px] bg-sky-200/80 smallTab:grid-rows-[250px_auto] largeScreen:hidden p-[${itemGap}]`}
      >
        {/* Img div */}
        <div className="rounded-[8px] bg-gray-100">
          <img
            className="h-full max-h-[330px] w-full rounded-[8px] object-cover"
            src={dataSingleProperty?.image}
          />
        </div>

        {/* details div*/}
        <PropertyDetailsCardFormat
          propertyData={dataSingleProperty}
          itemGap={itemGap}
        />
      </div>
    </div>
  );
}
PropertyDetails.propTypes = {
  propertyType: PropTypes.string,
  dataSingleProperty: PropTypes.object,
};

// COMPONENT END
