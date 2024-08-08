import Table from "../../ui/Table";
import { useGetAllFlats } from "./useGetAllFlats";

// COMPONENT START
export default function PropertyDetailsTable() {
  // VARIABLES
  const { dataFlats, statusFlats } = useGetAllFlats();

  console.log(dataFlats);

  // FUNCTIONS

  // JSX
  if (statusFlats === "pending") return <span>Loading..</span>;
  return (
    <Table
      colLabels={["IMAGE", "FLAT NO", "STATUS", "FLOOR", "RENT", "RENTER"]}
      colSize={["1fr", "1fr", "1fr", "1fr", "1fr", "1fr"]}
      dataFlats={dataFlats}
    />
  );
  // JSX
}
// COMPONENT END
