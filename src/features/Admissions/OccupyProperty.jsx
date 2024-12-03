import LoadingSpinner from "@/ui/LoadingSpinner";
import UnoccupiedPropertyDetails from "./UnoccupiedPropertyDetails";
import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import TenantAdmissionForm from "./TenantAdmissionForm";
import OtherUnoccupiedProperties from "./OtherUnoccupiedProperties";
import { useGetScreenHeight } from "@/hooks/useGetScreenHeight";
import { useGetAllUnoccupiedProperty } from "./useGetAllUnoccupiedProperty";
import { useGetSingleUnoccupiedPropertyData } from "./useGetSingleUnoccupiedPropertyData";

const itemGap = "7px";

// COMPONENT START
export default function OccupyProperty() {
  // VARIABLES
  let { dataSingleUnoccupied = {}, statusSingleUnoccupied } =
    useGetSingleUnoccupiedPropertyData();
  dataSingleUnoccupied = dataSingleUnoccupied?.data?.[0];
  const screenHeight = useGetScreenHeight();
  const { dataAllUnoccupiedProperty, statusAllUnoccupiedProperty } =
    useGetAllUnoccupiedProperty();

  // FUNCTIONS

  // JSX
  if (
    statusSingleUnoccupied === "success" &&
    statusAllUnoccupiedProperty === "success"
  ) {
    return (
      <div
        style={{ height: `calc(${screenHeight}px - 60px)` }}
        className="overflow-y-auto overflow-x-hidden pb-[30px]"
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

            <OtherUnoccupiedProperties
              dataAllUnoccupiedProperty={dataAllUnoccupiedProperty}
            />
          </section>

          {/* form */}
          <section className="rounded-[8px] border border-brand-color-500 p-[10px]">
            <div>
              <TenantAdmissionForm />
            </div>
          </section>
        </div>

        {/* DIVIDER  display for mobile and tabs */}
        <div className="grid grid-rows-[auto_1fr] gap-[10px] largeScreen:hidden">
          {/*  section property details */}
          <UnoccupiedPropertyDetails
            dataSingleUnoccupied={dataSingleUnoccupied}
            itemGap={"7px"}
          />

          {/* section property details */}
          <TenantAdmissionForm />
        </div>
      </div>
    );
  }

  if (
    statusSingleUnoccupied === "pending" &&
    statusAllUnoccupiedProperty === "success"
  ) {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner />
      </LoadingWrapperCenter>
    );
  }
  // JSX
}
// COMPONENT END
