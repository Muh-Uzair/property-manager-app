import PropTypes from "prop-types";
import { formatDistanceStrict } from "date-fns";
import { GiHourglass } from "react-icons/gi";
import Heading from "../../../../ui/Heading";
import TenantDetailsIcon from "./TenantDetailsIcon";
import { brandColor500 } from "../../../../styles/globalStyles";

// COMPONENT START
RentDuration.propTypes = {
  dataRenterDetails: PropTypes.object.isRequired,
};
export default function RentDuration({ dataRenterDetails }) {
  // JSX
  return (
    <div className="flex flex-col gap-[7px] rounded-[8px] bg-gray-200 p-[10px]">
      {/* icon and heading */}
      <header className="flex items-center gap-[10px] rounded-[5px] bg-sky-500 p-[8px] px-[10px] text-[18px] font-bold text-sky-200">
        {/* icon */}
        <TenantDetailsIcon
          icon={<GiHourglass size={`20px`} color={brandColor500} />}
        />
        {/* heading */}
        <Heading
          type="medium_large"
          uppercase={true}
          bold={true}
          headingColor="text-sky-200"
        >
          Property Rental Duration
        </Heading>
      </header>
      {dataRenterDetails.renter_from && (
        <span className="text-[15px] font-bold text-gray-600">{`${dataRenterDetails.name} rented this property almost ${formatDistanceStrict(new Date(dataRenterDetails.renter_from), new Date())} ago`}</span>
      )}
    </div>
  );
}
