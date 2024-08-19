import { HiMiniIdentification } from "react-icons/hi2";
import RenterDetailItem from "./RenterDetailItem";
import { brandColor500 } from "../../../styles/globalStyles";
import { FaFlag, FaHeart, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import PropTypes from "prop-types";

AllRenterDetailsItem.propTypes = {
  dataRenterDetails: PropTypes.object.isRequired,
};

export default function AllRenterDetailsItem({ dataRenterDetails }) {
  return (
    <div className="grid h-[100%] grid-cols-3 grid-rows-2 gap-[16px]">
      {/* id car no */}
      <RenterDetailItem
        icon={<HiMiniIdentification size={`28px`} color={brandColor500} />}
        itemHeading={"ID CARD NO"}
        itemValue={dataRenterDetails?.id_card_number}
      />
      {/* contact info */}
      <RenterDetailItem
        icon={<FaPhoneAlt size={`28px`} color={brandColor500} />}
        itemHeading={"CONTACT"}
        itemValue={dataRenterDetails?.contact_info}
      />
      {/* marital status */}
      <RenterDetailItem
        icon={<FaHeart size={`28px`} color={brandColor500} />}
        itemHeading={"MARITAL STATUS"}
        itemValue={
          dataRenterDetails?.marital_status === "unmarried"
            ? "single"
            : "married"
        }
      />
      {/* name */}
      <RenterDetailItem
        icon={<FaUser size={`28px`} color={brandColor500} />}
        itemHeading={"NAME"}
        itemValue={dataRenterDetails?.name}
      />
      {/* nationality  */}
      <RenterDetailItem
        icon={<FaFlag size={`28px`} color={brandColor500} />}
        itemHeading={"NATIONALITY"}
        itemValue={dataRenterDetails?.nationality}
      />
      {/* occupation */}
      <RenterDetailItem
        icon={<MdWork size={`28px`} color={brandColor500} />}
        itemHeading={"OCCUPATION"}
        itemValue={dataRenterDetails?.occupation}
      />
    </div>
  );
}
