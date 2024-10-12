import { Skeleton } from "@/components/ui/skeleton";

import Button from "../../ui/Button";
import LoadingSpinner from "../../ui/LoadingSpinner";
import LoadingWrapperCenter from "../../ui/LoadingWrapperCenter";
import { useGetPropertyType } from "../../hooks/useGetPropertyType";
import { useGetScreenHeight } from "../RentPaymentFeature/RentPaymentBody/useGetScreenHeight";
import { useGetOccupiedPropertyNumber } from "./useGetOccupiedPropertyNumber";

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
          height: `calc(${screenHeight}px - 90px)`, // Inline style with dynamic calculation
        }}
        className="overflow-y-auto px-[10px]"
      >
        {dataOccupiedPropertyNumber.map((val, i) => (
          <li
            key={i}
            className="mb-[10px] grid h-[300px] w-[100%] grid-rows-[65%_1fr] gap-[5px] rounded-[8px] border-[1px] border-brand-color-500 bg-brand-color-200 p-[8px]"
          >
            {/* DIVIDER image div */}
            <div className="rounded-[8px] border border-gray-300 bg-gray-100">
              {val.id}
            </div>

            {/* DIVIDER div property details */}
            <div className="grid grid-rows-[60%_1fr]">
              {/* DIVIDER div property details */}
              <div>
                <p className="text-[18px] font-bold text-brand-color-700">
                  {`${propertyType.at(0).toUpperCase()}${propertyType.slice(1, 4)}`}{" "}
                  number{" "}
                  {propertyType === "flats"
                    ? val?.flat_number
                    : propertyType === "rooms"
                      ? val?.room_number
                      : propertyType === "shops"
                        ? val?.shop_number
                        : ""}
                </p>
                {dataOccupiedTenantNames[i] &&
                  dataOccupiedTenantNames.length > 0 && (
                    <p className="text-gray-500">
                      {dataOccupiedTenantNames[i]}
                    </p>
                  )}
                {statusOccupiedTenantNames === "pending" && (
                  <span>
                    <Skeleton className="h-[20px] w-[100px] rounded-[3px] bg-brand-color-300" />
                  </span>
                )}
              </div>

              {/* DIVIDER div property details */}
              <div className="flex items-center justify-end">
                <Button onClick={emptyButtonClicked} type="red">
                  Empty
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  // JSX
}
// COMPONENT END
