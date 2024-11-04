import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import { useGetSingleUnoccupiedPropertyData } from "./useGetSingleUnoccupiedPropertyData";
import LoadingSpinner from "@/ui/LoadingSpinner";
import UnoccupiedPropertyDetails from "./UnoccupiedPropertyDetails";
import { useGetScreenHeight } from "@/hooks/useGetScreenHeight";

const itemGap = "7px";

// COMPONENT START
export default function OccupyProperty() {
  // VARIABLES
  let { dataSingleUnoccupied = {}, statusSingleUnoccupied } =
    useGetSingleUnoccupiedPropertyData();
  dataSingleUnoccupied = dataSingleUnoccupied?.data?.[0];
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX
  if (statusSingleUnoccupied === "success") {
    return (
      <div
        style={{ height: `calc(${screenHeight}px - 60px)` }}
        className="overflow-y-auto overflow-x-hidden"
      >
        {/* DIVIDER  display for large screens */}
        <div className="hidden h-full grid-cols-[60%_1fr] gap-[20px] pb-[40px] pt-[20px] largeScreen:grid">
          {/* details and other unoccupied properties */}
          <section className="grid grid-rows-2 gap-[20px]">
            <div>
              <UnoccupiedPropertyDetails
                dataSingleUnoccupied={dataSingleUnoccupied}
                itemGap={itemGap}
              />
            </div>

            <div className="rounded-[8px] bg-gray-200">
              other unoccupied property
            </div>
          </section>

          {/* form */}
          <section className="rounded-[8px] bg-gray-100">
            <div>property occupying form</div>
          </section>
        </div>

        {/* DIVIDER  display for mobile and tabs */}
        <div className="grid grid-rows-[auto_1fr] gap-[10px] largeScreen:hidden">
          {/*  section property details */}
          <UnoccupiedPropertyDetails
            dataSingleUnoccupied={dataSingleUnoccupied}
            itemGap={itemGap}
          />

          {/* section property details */}
          <section>Tenant info collection form</section>
        </div>
      </div>
    );
  }

  if (statusSingleUnoccupied === "pending") {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner />
      </LoadingWrapperCenter>
    );
  }
  // JSX
}
// COMPONENT END
