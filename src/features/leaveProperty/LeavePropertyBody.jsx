import LoadingSpinner from "../../ui/LoadingSpinner";
import LoadingWrapperCenter from "../../ui/LoadingWrapperCenter";
import LeavePropertyCard from "./LeavePropertyCard";
import { useGetPropertyType } from "../../hooks/useGetPropertyType";
import { useGetScreenHeight } from "../../hooks/useGetScreenHeight";
import { useGetOccupiedPropertyNumber } from "./useGetOccupiedPropertyNumber";
import { useLeaveProperty } from "./useLeaveProperty";
import { useState } from "react";

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
  const [clickedPropertyId, setClickedPropertyId] = useState(null);

  // FUNCTION
  function emptyButtonClicked(val) {
    setClickedPropertyId(val?.id);
    mutateLeaveProperty({ propertyId: val?.id, tenantId: val?.renter_id });
  }

  // JSX
  if (
    statusOccupiedPropertyNumber === "success" &&
    dataOccupiedPropertyNumber?.length > 0
  ) {
    return (
      <ul
        style={{
          height: `calc(${screenHeight}px - 90px)`,
        }}
        className="grid-cols-2 gap-x-[40px] gap-y-[20px] overflow-y-auto px-[10px] pb-[10px] smallTab:px-[20px] smallTab:pb-[50px] largeScreen:grid largeScreen:pl-[150px] largeScreen:pr-[150px]"
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
            clickedPropertyId={clickedPropertyId}
          />
        ))}
      </ul>
    );
  }
  if (statusOccupiedPropertyNumber === "pending") {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner />
      </LoadingWrapperCenter>
    );
  }

  // JSX
}
// COMPONENT END
