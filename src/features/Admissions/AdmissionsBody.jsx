import { Table } from "@/components/ui/table";

import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import LoadingSpinner from "@/ui/LoadingSpinner";
import AdmissionsBodyTableHeader from "./AdmissionsBodyTableHeader";
import AdmissionsBodyTableBody from "./AdmissionsBodyTableBody";
import { useGetAllUnoccupiedProperty } from "./useGetAllUnoccupiedProperty";
import { useGetScreenHeight } from "../../hooks/useGetScreenHeight";

// COMPONENT START
export default function AdmissionsBody() {
  // VARIABLES
  const { dataAllUnoccupiedProperty = [], statusAllUnoccupiedProperty } =
    useGetAllUnoccupiedProperty();
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX

  if (statusAllUnoccupiedProperty === "success") {
    return (
      <div
        style={{
          height: `calc(${screenHeight}px - 90px)`,
        }}
        className="flex justify-center overflow-y-auto overflow-x-hidden pb-[30px]"
      >
        <Table>
          <AdmissionsBodyTableHeader />
          <AdmissionsBodyTableBody
            dataAllUnoccupiedProperty={dataAllUnoccupiedProperty}
          />
        </Table>
      </div>
    );
  }

  if (statusAllUnoccupiedProperty === "pending") {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner />
      </LoadingWrapperCenter>
    );
  }
  // JSX
}
// COMPONENT END
