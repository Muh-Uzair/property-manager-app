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
  const { dataRenterDetails, statusRenterDetails } =
    useGetRenterDetailsOnId(renterId);
  console.log(dataRenterDetails);

  // FUNCTIONS

  // JSX
  if (statusRenterDetails === "pending") return <span>Loading...</span>;
  return (
    <Portion type="horizontal" gap={5} width="w-[100%]">
      <Heading type="primary">Renter Details</Heading>
      <div className="h-[100%] w-[100%] rounded-[8px] bg-slate-300">hello</div>
    </Portion>
  );
}
// COMPONENT END
