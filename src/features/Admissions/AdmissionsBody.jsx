import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { useGetAllUnoccupiedProperty } from "./useGetAllUnoccupiedProperty";
import { useGetPropertyType } from "@/hooks/useGetPropertyType";

// COMPONENT START
export default function AdmissionsBody() {
  // VARIABLES
  const { dataAllUnoccupiedProperty, statusAllUnoccupiedProperty } =
    useGetAllUnoccupiedProperty();
  const propertyType = useGetPropertyType();
  console.log(propertyType);

  if (statusAllUnoccupiedProperty === "success") {
    console.log(dataAllUnoccupiedProperty);
  }

  // FUNCTIONS

  // JSX

  if (statusAllUnoccupiedProperty === "success") {
    return <>Leave property body</>;
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
