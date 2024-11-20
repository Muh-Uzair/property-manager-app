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
import { useGetPropertyQt } from "./useGetPropertyQt";

// COMPONENT START
export default function Home() {
  // VARIABLES
  const { dataTotals = [], statusTotals } = useGetAllTotals();
  const { dataFlatsHome = [], statusFlatsHome } = useGetFlatsHome();
  const { dataAllOccupiedPropertiesQt = [], statusAllOccupiedPropertiesQt } =
    useGetPropertyQt();
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX
  if (
    statusTotals === "success" &&
    statusFlatsHome === "success" &&
    statusAllOccupiedPropertiesQt === "success"
  ) {
    return (
      <div
        style={{
          height: `calc(${screenHeight}px - 60px)`,
        }}
        className="flex justify-center overflow-x-hidden overflow-y-scroll"
      >
        <div className="grid grid-rows-[auto_auto_auto_auto_auto] gap-[10px] px-[5px] pb-[20px] pt-[10px] largeScreen:w-[800px]">
          {/* total flats etc */}
          <Totals dataTotals={dataTotals} />

          {/* flats */}
          <FlatsDisplayHome dataFlatsHome={dataFlatsHome} />

          {/* check other propertied */}
          <CheckOtherProperties />

          {/* shops */}
          <CircularCharts
            dataTotals={dataTotals}
            dataAllOccupiedPropertiesQt={dataAllOccupiedPropertiesQt}
          />

          {/* shops */}
          <PropertyValueChart />
        </div>
      </div>
    );
  }

  if (
    statusTotals === "pending" &&
    statusFlatsHome === "success" &&
    statusAllOccupiedPropertiesQt === "success"
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
