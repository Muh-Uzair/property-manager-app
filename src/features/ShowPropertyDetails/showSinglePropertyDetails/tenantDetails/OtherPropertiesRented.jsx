import PropTypes from "prop-types";
import { MdHomeWork } from "react-icons/md";

import NoOtherRentedProperties from "./NoOtherRentedProperties";
import OtherRentedPropertiesBtns from "./OtherRentedPropertiesBtns";
import Heading from "../../../../ui/Heading";
import TenantDetailsIcon from "./TenantDetailsIcon";

import { brandColor500 } from "../../../../styles/globalStyles";

// COMPONENT START
OtherPropertiesRented.propTypes = {
  otherRentedProperties: PropTypes.array,
  otherRentedPropertiesId: PropTypes.array,
  dataRenterDetails: PropTypes.object,
};
export default function OtherPropertiesRented({
  otherRentedProperties,
  otherRentedPropertiesId,
  dataRenterDetails,
}) {
  // VARIABLES

  // JSX
  if (dataRenterDetails) {
    return (
      <div className="flex flex-col gap-[20px] rounded-[8px] bg-gray-200 p-[10px]">
        {/* header */}
        <header className="flex items-center gap-[10px]">
          <TenantDetailsIcon
            icon={<MdHomeWork size={`28px`} color={brandColor500} />}
          />
          <Heading
            type="medium_large"
            bold={true}
            uppercase={true}
            headingColor={"text-brand-color-500"}
          >
            other properties rented
          </Heading>
        </header>

        {/* No other rented properties */}
        {otherRentedProperties?.length &&
          otherRentedProperties?.length === 1 && (
            <NoOtherRentedProperties dataRenterDetails={dataRenterDetails} />
          )}

        {/* Have other rented properties */}
        {otherRentedProperties?.length && otherRentedProperties?.length > 1 && (
          <OtherRentedPropertiesBtns
            otherRentedPropertiesId={otherRentedPropertiesId}
            otherRentedProperties={otherRentedProperties}
          />
        )}
      </div>
    );
  }
}
// COMPONENT END
