import PropTypes from "prop-types";
import { Skeleton } from "@/components/ui/skeleton";
import Button from "../../ui/Button";
import LoadingSpinner from "@/ui/LoadingSpinner";

// COMPONENT START
export default function LeavePropertyCard({
  val,
  i,
  propertyType,
  dataOccupiedTenantNames,
  statusOccupiedTenantNames,
  emptyButtonClicked,
  statusLeaveProperty,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <li
      key={i}
      className="mb-[10px] grid h-[300px] grid-rows-[65%_1fr] gap-[5px] rounded-[8px] border-[1px] border-brand-color-500 bg-brand-color-200 p-[8px] mobileL:h-[350px] smallTab:h-[430px]"
    >
      {/* DIVIDER image div */}
      <div className="rounded-[8px] border border-gray-300 bg-gray-100">
        <img
          className="h-full w-full rounded-[8px] object-cover"
          src={`${val?.image}`}
        />
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
          {dataOccupiedTenantNames[i] && dataOccupiedTenantNames.length > 0 && (
            <p className="text-gray-500">{dataOccupiedTenantNames[i]}</p>
          )}
          {statusOccupiedTenantNames === "pending" && (
            <span>
              <Skeleton className="h-[20px] w-[100px] rounded-[3px] bg-brand-color-300" />
            </span>
          )}
        </div>

        {/* DIVIDER div property details */}
        <div className="flex items-center justify-end">
          <Button onClick={() => emptyButtonClicked(val?.id)} type="red">
            {statusLeaveProperty === "pending" ? (
              <>
                <LoadingSpinner size={20} />
              </>
            ) : (
              <>Empty</>
            )}
          </Button>
        </div>
      </div>
    </li>
  );
  // JSX
}

LeavePropertyCard.propTypes = {
  propName: PropTypes.string,
  val: PropTypes.object,
  i: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  propertyType: PropTypes.string,
  dataOccupiedTenantNames: PropTypes.array,
  statusOccupiedTenantNames: PropTypes.string,
  emptyButtonClicked: PropTypes.func,
  statusLeaveProperty: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
