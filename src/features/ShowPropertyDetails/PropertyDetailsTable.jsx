import Table from "../../ui/Table";
import { useGetPropertyData } from "./useGetPropertyData";
import TableHeader from "../../ui/TableHeader";
import TableFooter from "../../ui/TableFooter";
import TableBody from "../../ui/TableBody";
import { useParams } from "react-router-dom";

import LoadingSpinner from "../../ui/LoadingSpinner";

const colSize = ["1fr", "1fr", "1fr", "1fr", "1fr", "1fr", "1fr"];

// COMPONENT START
export default function PropertyDetailsTable() {
  // VARIABLES
  const { propertyType } = useParams();

  const {
    statusProperty,
    data: { dataProperty = {}, totalProperty = null },
  } = useGetPropertyData();

  // FUNCTIONS

  // JSX

  /*if data does not arrive */
  if (!dataProperty?.length > 0 && statusProperty === "success")
    return <span>Error in fetching data</span>;

  /*when data is loading */
  if (statusProperty === "pending")
    return (
      <div className="flex h-[100%] w-[100%] items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  /*when data has arrived */
  if (dataProperty.length > 0 && statusProperty === "success") {
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
        <TableBody
          dataProperty={dataProperty}
          colSize={colSize}
          role={"table-body"}
        />

        {/* table footer */}
        <TableFooter role={"table-footer"} totalProperty={totalProperty} />
      </Table>
    );
  }
  // JSX
}
// COMPONENT END
