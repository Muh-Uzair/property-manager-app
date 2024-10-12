import LoadingSpinner from "../../ui/LoadingSpinner";
import LoadingWrapperCenter from "../../ui/LoadingWrapperCenter";
import { useGetPropertyType } from "../../hooks/useGetPropertyType";
import { useGetScreenHeight } from "../RentPaymentFeature/RentPaymentBody/useGetScreenHeight";
import { useGetOccupiedPropertyNumber } from "./useGetOccupiedPropertyNumber";
import LeavePropertyCard from "./LeavePropertyCard";

// COMPONENT START
export default function LeavePropertyBody() {
  // VARIABLES

  const screenHeight = useGetScreenHeight();
  const propertyType = useGetPropertyType();
  const {
    dataOccupiedPropertyNumber = [],
    statusOccupiedPropertyNumber,
    dataOccupiedTenantNames = [],
    statusOccupiedTenantNames,
  } = useGetOccupiedPropertyNumber();

  // FUNCTION
  function emptyButtonClicked() {
    console.log("empty button clicked");
  }

  // JSX
  if (statusOccupiedPropertyNumber === "pending") {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner />
      </LoadingWrapperCenter>
    );
  }

  if (
    statusOccupiedPropertyNumber === "success" &&
    dataOccupiedPropertyNumber?.length > 0
  ) {
    return (
      <ul
        style={{
          height: `calc(${screenHeight}px - 90px)`,
        }}
        className="overflow-y-auto bg-red-300 px-[10px] pb-[10px] smallTab:px-[20px] smallTab:pb-[50px]"
      >
        {dataOccupiedPropertyNumber.map((val, i) => (
          <LeavePropertyCard
            val={val}
            key={i}
            i={i}
            propertyType={propertyType}
            dataOccupiedTenantNames={dataOccupiedTenantNames}
            statusOccupiedTenantNames={statusOccupiedTenantNames}
            emptyButtonClicked={emptyButtonClicked}
          />
        ))}
      </ul>
    );
  }
  // JSX
}
// COMPONENT END
