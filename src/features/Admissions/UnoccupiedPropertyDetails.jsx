import PropTypes from "prop-types";

import Heading from "@/ui/Heading";
import PropertyDetailsCardFormat from "@/ui/PropertyDetailsCardFormat";
import { useGetPropertyType } from "@/hooks/useGetPropertyType";

// COMPONENT START
export default function UnoccupiedPropertyDetails({
  dataSingleUnoccupied,
  itemGap,
}) {
  // VARIABLES
  const propertyType = useGetPropertyType();

  // FUNCTIONS

  // JSX
  return (
    <>
      {/* DIVIDER for largeScreens  */}
      <section className="hidden grid-rows-[auto_auto] gap-[5px] largeScreen:grid">
        <Heading type="primary">
          {`${propertyType.at(0).toUpperCase()}${propertyType.slice(1, -1)} details`}
        </Heading>

        <div className="grid h-full grid-cols-[60%_1fr] gap-[20px] rounded-[8px] bg-brand-color-200/70 p-[20px]">
          {/* image div */}
          <figure className="h-[310px] rounded-[5px] bg-gray-100">
            <img
              className="h-full w-full rounded-[5px] object-cover"
              src={dataSingleUnoccupied?.image}
            />
          </figure>

          {/* property details div */}
          <PropertyDetailsCardFormat
            propertyData={dataSingleUnoccupied}
            itemGap={"20px"}
          />
        </div>
      </section>

      {/* DIVIDER for mobiles and tabs  */}
      <section className="grid grid-rows-[auto_auto] gap-[5px] largeScreen:hidden">
        <Heading type="primary">
          {`${propertyType.at(0).toUpperCase()}${propertyType.slice(1, -1)} details`}
        </Heading>

        <div className="grid grid-rows-[180px_1fr] gap-[7px] rounded-[8px] bg-brand-color-200/70 p-[7px] smallTab:grid-rows-[250px_1fr]">
          {/* image div */}
          <figure className="rounded-[5px] bg-gray-100">
            <img
              className="h-full w-full rounded-[5px] object-cover"
              src={dataSingleUnoccupied?.image}
            />
          </figure>

          {/* property details div */}
          <PropertyDetailsCardFormat
            propertyData={dataSingleUnoccupied}
            itemGap={itemGap}
          />
        </div>
      </section>
    </>
  );
  // JSX
}

UnoccupiedPropertyDetails.propTypes = {
  dataSingleUnoccupied: PropTypes.object,
  itemGap: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
