import Table from "../../ui/Table";
import { useGetPropertyData } from "./useGetPropertyData";
import TableHeader from "../../ui/TableHeader";
import TableFooter from "../../ui/TableFooter";
import TableBody from "../../ui/TableBody";

import LoadingSpinner from "../../ui/LoadingSpinner";
import { useGetPropertyType } from "../../hooks/useGetPropertyType";

const colSize = ["1fr", "1fr", "1fr", "1fr", "1fr", "1fr", "1fr"];

// COMPONENT START
export default function PropertyDetailsTable() {
  // VARIABLES
  const propertyType = useGetPropertyType();
  const {
    statusProperty,
    data: { dataProperty = {}, totalProperty = null },
  } = useGetPropertyData();

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
      <Table>
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
        />

        {/* table body */}
        <TableBody tableData={dataProperty} colSize={colSize} />

        {/* table footer */}
        <TableFooter totalProperty={totalProperty} />
      </Table>
    );
  }
  // JSX
}
// COMPONENT END
