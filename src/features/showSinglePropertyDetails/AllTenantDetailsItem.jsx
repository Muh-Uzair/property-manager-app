import { brandColor500 } from "../../styles/globalStyles";
import { FaFlag, FaHeart, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import PropTypes from "prop-types";
import { getCode } from "country-list";
import { FlagIcon as CountryFlag } from "react-flag-kit";

import TenantDetailItem from "./TenantDetailItem";

import { HiMiniIdentification } from "react-icons/hi2";

const tenantDetailIconSize = "15px";

// COMPONENT START
export default function AllTenantDetailsItem({ dataRenterDetails }) {
  // console.log(dataRenterDetails);
  if (dataRenterDetails.nationality) {
    return (
      <div className="grid grid-cols-2 gap-[7px] largeScreen:h-full largeScreen:gap-[10px]">
        {/* id car no */}
        <TenantDetailItem
          icon={
            <HiMiniIdentification
              size={tenantDetailIconSize}
              color={brandColor500}
            />
          }
          itemHeading={"ID CARD NO"}
          itemValue={dataRenterDetails?.id_card_number}
        />
        {/* contact info */}
        <TenantDetailItem
          icon={
            <FaPhoneAlt size={tenantDetailIconSize} color={brandColor500} />
          }
          itemHeading={"CONTACT"}
          itemValue={dataRenterDetails?.contact_info}
        />
        {/* marital status */}
        <TenantDetailItem
          icon={<FaHeart size={tenantDetailIconSize} color={brandColor500} />}
          itemHeading={"MARITAL STATUS"}
          itemValue={
            dataRenterDetails?.marital_status === "unmarried"
              ? "single"
              : "married"
          }
        />
        {/* name */}
        <TenantDetailItem
          icon={<FaUser size={tenantDetailIconSize} color={brandColor500} />}
          itemHeading={"NAME"}
          itemValue={dataRenterDetails?.name}
        />
        {/* nationality  */}
        <TenantDetailItem
          icon={<FaFlag size={tenantDetailIconSize} color={brandColor500} />}
          itemHeading={"NATIONALITY"}
          // itemValue={`${getCode(`${dataRenterDetails?.nationality}`)} ${dataRenterDetails?.nationality}`}
          itemValue={
            <div className="grid grid-cols-[20px_1fr] items-center">
              {" "}
              <CountryFlag
                code={getCode(dataRenterDetails?.nationality || "UK")}
                size={15}
              />{" "}
              {dataRenterDetails?.nationality || ""}
            </div>
          }
        />
        {/* occupation */}
        <TenantDetailItem
          icon={<MdWork size={tenantDetailIconSize} color={brandColor500} />}
          itemHeading={"OCCUPATION"}
          itemValue={dataRenterDetails?.occupation}
        />
      </div>
    );
  }
}
AllTenantDetailsItem.propTypes = {
  dataRenterDetails: PropTypes.object,
};
// COMPONENT END
