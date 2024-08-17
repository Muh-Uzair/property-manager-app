import PropTypes from "prop-types";
import { MdBedroomChild, MdHomeWork } from "react-icons/md";
import { brandColor500 } from "../../../styles/globalStyles";
import TenantDetailsIcon from "./TenantDetailsIcon";
import { useNavigate, useParams } from "react-router-dom";
import { FaBuilding, FaStore } from "react-icons/fa";

const rentPropIconSize = "15px";

// COMPONENT START
OtherPropertiesRented.propTypes = {
  otherRentedProperties: PropTypes.array,
  otherRentedPropertiesId: PropTypes.array,
};
export default function OtherPropertiesRented({
  otherRentedProperties,
  otherRentedPropertiesId,
}) {
  // VARIABLES
  const { propertyId } = useParams();
  const navigate = useNavigate();

  // FUNCTIONS

  // JSX
  return (
    <div className="flex flex-col gap-[20px] rounded-[8px] bg-gray-200 p-[10px]">
      {/* header */}
      <header className="flex items-center gap-[10px]">
        <TenantDetailsIcon
          icon={<MdHomeWork size={`28px`} color={brandColor500} />}
        />
        <span className="rounded-[3px] bg-sky-200 px-[10px] text-[18px] font-bold text-brand-color-500">
          OTHER RENTED PROPERTIES
        </span>
      </header>
      {otherRentedProperties.length > 0 && (
        <main>
          {otherRentedProperties.map((val, i) => (
            <span key={i}>
              {Number(otherRentedPropertiesId[i]) !== Number(propertyId) && (
                <button
                  className="mb-[5px] flex items-center gap-[5px] rounded-[5px] border-[1px] border-sky-500 px-[5px] text-sky-500 transition-all duration-150 hover:bg-sky-100 active:bg-sky-200/70"
                  onClick={() =>
                    navigate(
                      `/property-details/${val}s/${otherRentedPropertiesId[i]}`,
                    )
                  }
                >
                  <>
                    {val === "flat" ? (
                      <FaBuilding
                        size={rentPropIconSize}
                        color={brandColor500}
                      />
                    ) : val === "room" ? (
                      <MdBedroomChild
                        size={rentPropIconSize}
                        color={brandColor500}
                      />
                    ) : val === "shop" ? (
                      <FaStore size={rentPropIconSize} color={brandColor500} />
                    ) : (
                      <></>
                    )}
                  </>
                  <span className="text-[15px] font-semibold uppercase text-sky-500">{`${val} ${otherRentedPropertiesId[i]}`}</span>
                </button>
              )}
            </span>
          ))}
        </main>
      )}
    </div>
  );
}
// COMPONENT END
