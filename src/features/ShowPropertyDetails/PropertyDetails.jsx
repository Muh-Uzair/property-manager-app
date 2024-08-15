import PropTypes from "prop-types";
import Portion from "../../ui/Portion";
import Heading from "../../ui/Heading";

// COMPONENT START
PropertyDetails.propTypes = {
  propertyType: PropTypes.string.isRequired,
  dataSingleProperty: PropTypes.object.isRequired,
  statusSingleProperty: PropTypes.string.isRequired,
};

export default function PropertyDetails({
  propertyType,
  dataSingleProperty = {},
  statusSingleProperty,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX

  return (
    <Portion type="horizontal" gap={5} width="w-[100%]">
      <Heading type="primary">
        {" "}
        {`${propertyType.charAt(0).toLocaleUpperCase()}${propertyType.slice(1, propertyType.length - 1)} Details`}
      </Heading>
      {/* Image + details */}
      <div
        className={`h-[100%] w-[100%] rounded-[8px] bg-sky-200/80 p-[16px] ${statusSingleProperty === "pending" ? "flex items-center justify-center" : statusSingleProperty === "success" ? "flex gap-[20px]" : ""}`}
      >
        {statusSingleProperty === "pending" && <span>Loading...</span>}
        {statusSingleProperty === "success" && (
          <>
            {/* Img div */}
            <div className="h-[100%] w-[60%] rounded-[8px] bg-gray-400">
              <img
                className="h-full max-h-[330px] w-full rounded-[8px] object-cover"
                src={dataSingleProperty.image}
              />
            </div>
            {/* details div*/}
            <div className="grid w-[40%] grid-cols-2 gap-[20px]">
              <DetailsItem
                itemHeading="Id No"
                itemValue={dataSingleProperty.id}
              />
              <DetailsItem
                itemHeading={`${propertyType.charAt(0).toLocaleUpperCase()}${propertyType.slice(1, propertyType.length - 1)} No`}
                itemValue={
                  dataSingleProperty.flat_number ||
                  dataSingleProperty.room_number ||
                  dataSingleProperty.shop_number
                }
              />

              <DetailsItem
                itemHeading="Rent"
                itemValue={dataSingleProperty.rent}
              />

              <DetailsItem
                itemHeading="Floor"
                itemValue={dataSingleProperty.floor}
              />

              <DetailsItem
                itemHeading="Size"
                itemValue={dataSingleProperty.size}
              />

              <DetailsItem
                itemHeading="Status"
                itemValue={dataSingleProperty.status}
              />
            </div>
          </>
        )}
      </div>
    </Portion>
  );
}
// COMPONENT END

// COMPONENT START
DetailsItem.propTypes = {
  itemHeading: PropTypes.string.isRequired,
  itemValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

function DetailsItem({ itemHeading, itemValue }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[8px] bg-sky-300/60">
      <Heading type="medium_small" headingColor={"text-brand-color-600"}>
        {itemHeading}
      </Heading>
      <span className="font-bold text-gray-500">{itemValue}</span>
    </div>
  );
}
// COMPONENT END
