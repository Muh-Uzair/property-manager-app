import { brandColor500 } from "../../../../styles/globalStyles";
import { FaFlag, FaHeart, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import PropTypes from "prop-types";

import TenantDetailItem from "./TenantDetailItem";

import { HiMiniIdentification } from "react-icons/hi2";

// COMPONENT START
export default function AllTenantDetailsItem({ dataRenterDetails }) {
  return (
    <div className="grid h-[100%] grid-cols-3 grid-rows-2 gap-[16px]">
      {/* id car no */}
      <TenantDetailItem
        icon={<HiMiniIdentification size={`28px`} color={brandColor500} />}
        itemHeading={"ID CARD NO"}
        itemValue={dataRenterDetails?.id_card_number}
      />
      {/* contact info */}
      <TenantDetailItem
        icon={<FaPhoneAlt size={`28px`} color={brandColor500} />}
        itemHeading={"CONTACT"}
        itemValue={dataRenterDetails?.contact_info}
      />
      {/* marital status */}
      <TenantDetailItem
        icon={<FaHeart size={`28px`} color={brandColor500} />}
        itemHeading={"MARITAL STATUS"}
        itemValue={
          dataRenterDetails?.marital_status === "unmarried"
            ? "single"
            : "married"
        }
      />
      {/* name */}
      <TenantDetailItem
        icon={<FaUser size={`28px`} color={brandColor500} />}
        itemHeading={"NAME"}
        itemValue={dataRenterDetails?.name}
      />
      {/* nationality  */}
      <TenantDetailItem
        icon={<FaFlag size={`28px`} color={brandColor500} />}
        itemHeading={"NATIONALITY"}
        itemValue={dataRenterDetails?.nationality}
      />
      {/* occupation */}
      <TenantDetailItem
        icon={<MdWork size={`28px`} color={brandColor500} />}
        itemHeading={"OCCUPATION"}
        itemValue={dataRenterDetails?.occupation}
      />
    </div>
  );
}
AllTenantDetailsItem.propTypes = {
  dataRenterDetails: PropTypes.object.isRequired,
};
// COMPONENT END
