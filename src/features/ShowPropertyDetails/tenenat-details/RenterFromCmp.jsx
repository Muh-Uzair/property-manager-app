import PropTypes from "prop-types";
import { formatDistanceStrict } from "date-fns";
import { GiHourglass } from "react-icons/gi";

// COMPONENT START
RenterFromCMP.propTypes = {
  dataRenterDetails: PropTypes.object.isRequired,
};
export default function RenterFromCMP({ dataRenterDetails }) {
  // JSX
  return (
    <div className="flex flex-col gap-[15px] rounded-[8px] bg-gray-200 p-[10px]">
      {/* icon and heading */}
      <header className="flex items-center gap-[10px] rounded-[5px] bg-sky-500 p-[8px] px-[10px] text-[18px] font-bold text-sky-200">
        {/* icon */}
        <span className="rounded-full bg-sky-200 p-[10px] text-sky-500">
          <GiHourglass size={"28px"} />
        </span>
        {/* heading */}
        <h3 className="uppercase">Property Rental Duration</h3>
      </header>
      {dataRenterDetails.renter_from && (
        <span className="text-[18px] font-bold text-gray-600">{`${dataRenterDetails.name} rented this property almost ${formatDistanceStrict(new Date(dataRenterDetails.renter_from), new Date())} ago`}</span>
      )}
    </div>
  );
}
