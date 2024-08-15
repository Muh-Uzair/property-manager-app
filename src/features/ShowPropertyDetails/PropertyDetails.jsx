import PropTypes from "prop-types";
import Portion from "../../ui/Portion";
import Heading from "../../ui/Heading";

export default function PropertyDetails({
  propertyType,
  dataSingleProperty,
  statusSingleProperty,
}) {
  return (
    <Portion type="horizontal" gap={5} width="w-[100%]">
      <Heading type="primary">
        {" "}
        {`${propertyType.charAt(0).toLocaleUpperCase()}${propertyType.slice(1, propertyType.length - 1)} Details`}
      </Heading>
      {/* Image + details */}
      <div
        className={`h-[100%] w-[100%] rounded-[8px] bg-sky-200 p-[16px] ${statusSingleProperty === "pending" ? "flex items-center justify-center" : statusSingleProperty === "success" ? "flex gap-[20px]" : ""}`}
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
            <div className="flex gap-[20px]">
              <div className="flex flex-col">
                <Heading
                  type="medium_small"
                  headingColor={"text-brand-color-600"}
                >
                  {`${propertyType.charAt(0).toLocaleUpperCase()}${propertyType.slice(1, propertyType.length - 1)} Number`}
                </Heading>
                <span>
                  {dataSingleProperty.flat_number ||
                    dataSingleProperty.room_number ||
                    dataSingleProperty.shop_number}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </Portion>
  );
}

PropertyDetails.propTypes = {
  propertyType: PropTypes.string.isRequired,
  dataSingleProperty: PropTypes.object.isRequired,
  statusSingleProperty: PropTypes.string.isRequired,
};
