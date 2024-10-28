import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { useGetAllUnoccupiedProperty } from "./useGetAllUnoccupiedProperty";

// COMPONENT START
export default function AdmissionsBody() {
  // VARIABLES
  const { dataAllUnoccupiedProperty, statusAllUnoccupiedProperty } =
    useGetAllUnoccupiedProperty();

  if (statusAllUnoccupiedProperty === "success") {
    console.log(dataAllUnoccupiedProperty);
  }

  // FUNCTIONS

  // JSX

  if (statusAllUnoccupiedProperty === "success") {
    return <div>component admissions body</div>;
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
