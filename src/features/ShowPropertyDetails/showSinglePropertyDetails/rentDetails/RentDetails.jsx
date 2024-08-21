import Portion from "../../../../ui/Portion";
import Heading from "../../../../ui/Heading";
import DisplayRentDetails from "./DisplayRentDetails";

export default function RentDetails() {
  return (
    <Portion type="horizontal" gap={5} width="w-[100%]">
      <Heading type="primary">Rent Details</Heading>
      {/* rent details */}
      <DisplayRentDetails />
    </Portion>
  );
}
