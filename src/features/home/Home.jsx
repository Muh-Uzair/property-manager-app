import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import Totals from "./Totals";
import { useGetAllTotals } from "./useGetAllTotals";
import LoadingSpinner from "@/ui/LoadingSpinner";
import FlatsDisplayHome from "./FlatsDisplayHome";
import CheckOtherProperties from "./CheckOtherProperties";
import CircularCharts from "./CircularCharts";
import { useGetScreenHeight } from "@/hooks/useGetScreenHeight";
import PropertyValueChart from "./PropertyValueChart";

// COMPONENT START
export default function Home() {
  // VARIABLES
  const { dataTotals, statusTotals } = useGetAllTotals();
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX
  if (statusTotals === "success") {
    return (
      <div
        style={{
          height: `calc(${screenHeight}px - 60px)`,
        }}
        className="grid grid-rows-[auto_auto_auto_auto_auto] gap-[10px] overflow-x-hidden overflow-y-scroll px-[5px] pb-[20px] pt-[10px] largeScreen:pl-[20%] largeScreen:pr-[20px]"
      >
        {/* total flats etc */}
        <Totals dataTotals={dataTotals} />

        {/* flats */}
        <FlatsDisplayHome />

        {/* check other propertied */}
        <CheckOtherProperties />

        {/* shops */}
        <CircularCharts />

        {/* shops */}
        <PropertyValueChart />
      </div>
    );
  }

  if (statusTotals === "pending") {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner />
      </LoadingWrapperCenter>
    );
  }

  // JSX
}
// COMPONENT END
