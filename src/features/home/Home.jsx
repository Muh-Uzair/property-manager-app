import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import Totals from "./Totals";
import { useGetAllTotals } from "./useGetAllTotals";
import LoadingSpinner from "@/ui/LoadingSpinner";
import FlatsDisplayHome from "./FlatsDisplayHome";
import CheckOtherProperties from "./CheckOtherProperties";
import CircularCharts from "./CircularCharts";
import { useGetFlatsHome } from "./useGetFlatsHome";
import PropertyValueChart from "./PropertyValueChart";
import { useGetScreenHeight } from "@/hooks/useGetScreenHeight";

// COMPONENT START
export default function Home() {
  // VARIABLES
  const { dataTotals, statusTotals } = useGetAllTotals();
  const { dataFlatsHome = [], statusFlatsHome } = useGetFlatsHome();

  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX
  if (statusTotals === "success" && statusFlatsHome === "success") {
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
        <FlatsDisplayHome dataFlatsHome={dataFlatsHome} />

        {/* check other propertied */}
        <CheckOtherProperties />

        {/* shops */}
        <CircularCharts />

        {/* shops */}
        <PropertyValueChart />
      </div>
    );
  }

  if (statusTotals === "pending" && statusFlatsHome === "success") {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner />
      </LoadingWrapperCenter>
    );
  }

  // JSX
}
// COMPONENT END
