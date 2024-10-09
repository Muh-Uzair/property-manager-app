import { useGetAllOccupiedProperty } from "../../hooks/useGetAllOccupiedProperty";
import LoadingSpinner from "../../ui/LoadingSpinner";
import LoadingWrapperCenter from "../../ui/LoadingWrapperCenter";
import { useGetScreenHeight } from "../RentPaymentFeature/RentPaymentBody/useGetScreenHeight";

// COMPONENT START
export default function LeavePropertyBody() {
  // VARIABLES
  const { dataOccupiedProperty, statusOccupiedProperty } =
    useGetAllOccupiedProperty();
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS
  console.log(dataOccupiedProperty);

  // JSX
  if (statusOccupiedProperty === "success" && dataOccupiedProperty.length > 0) {
    return (
      <ul
        style={{
          height: `calc(${screenHeight}px - 90px)`, // Inline style with dynamic calculation
        }}
        className="overflow-y-auto px-[10px]"
      >
        {dataOccupiedProperty.map((val, i) => (
          <li
            key={i}
            className="mb-[10px] grid h-[300px] w-[100%] grid-rows-[70%_1fr] gap-[5px] rounded-[8px] border-[1px] border-brand-color-500 bg-brand-color-200 p-[8px]"
          >
            {/* DIVIDER image div */}
            <div className="rounded-[8px] bg-gray-100">{val.id}</div>

            {/* DIVIDER div property details */}
            <div className="grid grid-rows-[60%_1fr]">
              {/* DIVIDER div property details */}
              <div className="bg-green-300">
                <p>Flat Number</p>
                <p>Tenant name</p>
              </div>

              {/* DIVIDER div property details */}
              <div className="flex items-center justify-end">
                <button className="bg-red-600 text-white">Empty</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  if (statusOccupiedProperty === "pending") {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner />
      </LoadingWrapperCenter>
    );
  }
  // JSX
}
// COMPONENT END
