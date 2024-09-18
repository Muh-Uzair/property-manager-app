import Heading from "../../../../ui/Heading";
import DisplayRentDetails from "./DisplayRentDetails";

export default function RentDetails() {
  return (
    <div className="grid grid-rows-[auto_1fr]">
      <Heading type="primary">Rent Details</Heading>
      {/* rent details */}
      <div className="overflow-y-scroll">
        <DisplayRentDetails />
      </div>
    </div>
  );
}
