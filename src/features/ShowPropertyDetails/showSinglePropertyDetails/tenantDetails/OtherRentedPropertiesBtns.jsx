import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiGetPropertyName } from "./apiOtherRentedProperties";
import { brandColor500 } from "../../../../styles/globalStyles";
import PropTypes from "prop-types";
import { FaBuilding, FaStore } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";

const rentPropIconSize = "15px";

// COMPONENT START
export default function OtherRentedPropertiesBtns({
  otherRentedPropertiesId,
  otherRentedProperties,
}) {
  // VARIABLES
  const navigate = useNavigate();

  const { propertyId } = useParams();
  const [propertyNamesArr, setPropertyNamesArr] = useState([]);

  // FUNCTION
  useEffect(() => {
    const getPropertyName = async () => {
      const namesArr = [];
      for (let i = 0; i < otherRentedProperties.length; i++) {
        const propertyName = await apiGetPropertyName(
          otherRentedProperties[i],
          otherRentedPropertiesId[i],
        );
        namesArr.push(propertyName);
      }
      setPropertyNamesArr(namesArr);
    };
    if (propertyId) getPropertyName();
  }, [propertyId, otherRentedProperties, otherRentedPropertiesId]);

  return (
    <main>
      {propertyNamesArr.map((val, i) => (
        <span key={i}>
          {Number(otherRentedPropertiesId[i]) !== Number(propertyId) && (
            <button
              className="mb-[5px] flex items-center gap-[5px] rounded-[5px] border-[1px] border-sky-500 px-[5px] text-sky-500 transition-all duration-150 hover:bg-sky-100 active:bg-sky-200/70"
              onClick={() =>
                navigate(
                  `/property-details/${otherRentedProperties[i]}s/${otherRentedPropertiesId[i]}`,
                )
              }
            >
              <>
                {otherRentedProperties[i] === "flat" ? (
                  <FaBuilding size={rentPropIconSize} color={brandColor500} />
                ) : otherRentedProperties[i] === "room" ? (
                  <MdBedroomChild
                    size={rentPropIconSize}
                    color={brandColor500}
                  />
                ) : otherRentedProperties[i] === "shop" ? (
                  <FaStore size={rentPropIconSize} color={brandColor500} />
                ) : (
                  <></>
                )}
              </>
              <span className="text-[15px] font-semibold uppercase text-sky-500">{`${otherRentedProperties[i]} ${val}`}</span>
            </button>
          )}
        </span>
      ))}
    </main>
  );
}

OtherRentedPropertiesBtns.propTypes = {
  propertyNamesArr: PropTypes.array.isRequired,
  otherRentedPropertiesId: PropTypes.object.isRequired,
  otherRentedProperties: PropTypes.object.isRequired,
};
// COMPONENT END
