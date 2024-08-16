import Portion from "../../ui/Portion";
import Heading from "../../ui/Heading";
import PropTypes from "prop-types";
import { useGetRenterDetailsOnId } from "./useGetRenterDetailsOnId";

// COMPONENT START
RenterDetails.propTypes = {
  renterId: PropTypes.number.isRequired,
};

export default function RenterDetails({ renterId }) {
  // VARIABLES
  let { dataRenterDetails = [], statusRenterDetails } =
    useGetRenterDetailsOnId(renterId);
  dataRenterDetails = dataRenterDetails[0];

  console.log(dataRenterDetails);

  // FUNCTIONS

  // JSX

  return (
    <Portion type="horizontal" gap={5} width="w-[100%]">
      <Heading type="primary">Renter Details</Heading>
      <div
        className={`h-[100%] w-[100%] rounded-[8px] bg-gray-100 p-[16px] ${statusRenterDetails === "pending" ? "flex items-center justify-center" : "grid grid-cols-[1fr_30%] gap-[16px]"}`}
      >
        {statusRenterDetails === "pending" && <span>Loading...</span>}
        {statusRenterDetails === "success" && (
          <>
            {/*detail items*/}
            <div className="grid h-[100%] grid-cols-3 grid-rows-4 gap-[16px]">
              <RenterDetailItem />
              <RenterDetailItem />
              <RenterDetailItem />
              <RenterDetailItem />
            </div>
            {/* renter image div */}
            <div className="h-[100%] rounded-[8px] bg-gray-400/50"></div>
          </>
        )}
      </div>
    </Portion>
  );
}
// COMPONENT END

// COMPONENT START
RenterDetailItem.propTypes = {
  icon: PropTypes.node,
  itemHeading: PropTypes.string,
  itemValue: PropTypes.string,
};

function RenterDetailItem({ icon, itemHeading, itemValue }) {
  return (
    <div className="grid grid-cols-[30%_1fr] gap-[8px] rounded-[5px] bg-gray-200">
      <div className="flex items-center justify-center">{icon}</div>
      <div>
        <span>{itemHeading}</span>
        <span>{itemValue}</span>
      </div>
    </div>
  );
}
