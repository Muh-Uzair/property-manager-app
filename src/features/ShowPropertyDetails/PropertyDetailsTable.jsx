import Table from "../../ui/Table";
import { useGetAllFlats } from "./useGetAllFlats";
import TableHeader from "../../ui/TableHeader";
import TableFooter from "../../ui/TableFooter";
import TableBody from "../../ui/TableBody";
import { useParams } from "react-router-dom";

const colSize = ["1fr", "1fr", "1fr", "1fr", "1fr", "1fr", "1fr"];

// COMPONENT START
export default function PropertyDetailsTable() {
  // VARIABLES
  const { propertyType } = useParams();

  const { dataFlats, statusFlats } = useGetAllFlats();

  // FUNCTIONS

  // JSX
  if (statusFlats === "pending") return <span>Loading..</span>;
  return (
    <Table role={"table"}>
      {/* table header */}
      <TableHeader
        colLabels={[
          "IMAGE",
          `${propertyType?.toLocaleUpperCase().slice(0, -1)} NO`,
          "STATUS",
          "FLOOR",
          "RENT",
          "RENTER",
        ]}
        colSize={colSize}
        backgroundColor={"#38bdf8"}
        role={"table-header"}
      />

      {/* table body */}
      <TableBody dataFlats={dataFlats} colSize={colSize} role={"table-body"} />

      {/* table footer */}
      <TableFooter role={"table-footer"} />
    </Table>
  );
  // JSX
}
// COMPONENT END
