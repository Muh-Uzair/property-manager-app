import PropTypes from "prop-types";
import { MdHomeWork } from "react-icons/md";
import { brandColor500 } from "../../../styles/globalStyles";
import TenantDetailsIcon from "./TenenatDetailsIcon";

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

  // FUNCTIONS

  // JSX
  return (
    <div className="rounded-[8px] bg-gray-200">
      {/* header */}
      <header className="flex items-center gap-[10px] p-[10px]">
        <TenantDetailsIcon
          icon={<MdHomeWork size={`28px`} color={brandColor500} />}
        />
        <span className="rounded-[3px] bg-sky-200 px-[10px] text-[18px] font-bold text-brand-color-500">
          OTHER RENTED PROPERTIES
        </span>
      </header>

      <main>
        {otherRentedProperties.map((val, i) => (
          <div key={i}>
            <span>icon</span>
            <span>{`${val} ${otherRentedPropertiesId[i]}`}</span>
          </div>
        ))}
      </main>
    </div>
  );
}
// COMPONENT END
