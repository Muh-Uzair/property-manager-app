import LoadingSpinner from "../../ui/LoadingSpinner";
import LoadingWrapperCenter from "../../ui/LoadingWrapperCenter";
import { useGetPropertyType } from "../../hooks/useGetPropertyType";
import { useGetScreenHeight } from "../RentPaymentFeature/RentPaymentBody/useGetScreenHeight";
import { useGetOccupiedPropertyNumber } from "./useGetOccupiedPropertyNumber";
import LeavePropertyCard from "./LeavePropertyCard";
import { useLeaveProperty } from "./useLeaveProperty";

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
  const { mutateLeaveProperty, statusLeaveProperty } = useLeaveProperty();

  // FUNCTION
  function emptyButtonClicked(propertyId) {
    console.log(propertyId);
    mutateLeaveProperty(propertyId);
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
        className="grid-cols-2 gap-x-[40px] gap-y-[20px] overflow-y-auto px-[10px] pb-[10px] smallTab:px-[20px] smallTab:pb-[50px] largeScreen:grid largeScreen:pr-[200px]"
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
            statusLeaveProperty={statusLeaveProperty}
          />
        ))}
      </ul>
    );
  }
  // JSX
}
// COMPONENT END
