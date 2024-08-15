import Portion from "../../ui/Portion";
import Heading from "../../ui/Heading";

export default function RentDetails() {
  return (
    <Portion type="horizontal" gap={5} width="w-[100%]">
      <Heading type="primary">Rent Details</Heading>
      {/* rent details */}
      <div className="h-[100%] w-[100%] rounded-[8px] bg-slate-300">hello</div>
    </Portion>
  );
}
