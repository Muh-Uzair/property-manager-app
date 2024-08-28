import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import Heading from "../../../../ui/Heading";
import SinglePropertyDetailsItem from "./SinglePropertyDetailsItem";
import { useContext } from "react";
import { ContextSingleProperty } from "../SinglePropertyDetails";

// COMPONENT START

export default function PropertyDetails() {
  // VARIABLES
  const { propertyType } = useParams();

  let { dataSingleProperty } = useContext(ContextSingleProperty);
  dataSingleProperty = dataSingleProperty?.data?.[0];

  // FUNCTIONS

  // JSX

  return (
    <div className="grid grid-rows-[auto_1fr]">
      <Heading type="primary">
        {" "}
        {`${propertyType.charAt(0).toLocaleUpperCase()}${propertyType.slice(1, propertyType.length - 1)} Details`}
      </Heading>
      {/* Image + details */}
      <div
        className={`grid grid-cols-[1fr_380px] gap-[16px] rounded-[8px] bg-sky-200/80 p-[16px]`}
      >
        {/* Img div */}
        <div className="rounded-[8px] bg-gray-100">
          {/* <img
                className="h-full max-h-[330px] w-full rounded-[8px] object-cover"
                src={dataSingleProperty?.image}
              /> */}
          img
        </div>
        {/* details div*/}
        <div className="grid grid-cols-2 gap-[16px]">
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
    </div>
  );
}
PropertyDetails.propTypes = {
  propertyType: PropTypes.string,
  dataSingleProperty: PropTypes.object,
};

// COMPONENT END
