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
import { useGetOccupiedQt } from "./useGetOccupiedQt";
import RoomsDisplayHome from "./RoomsDisplayHome";
import { useGetRoomsHome } from "./useGetRoomsHome";
import { useGetShopsHome } from "./useGetShopsHome";
import ShopsDisplayHome from "./ShopsDisplayHome";

// COMPONENT START
export default function Home() {
  // VARIABLES
  const { dataTotals = [], statusTotals } = useGetAllTotals();
  const { dataFlatsHome = [], statusFlatsHome } = useGetFlatsHome();
  const { dataRoomsHome = [], statusRoomsHome } = useGetRoomsHome();
  const { dataShopsHome = [], statusShopsHome } = useGetShopsHome();
  const { dataAllOccupiedPropertiesQt = [], statusAllOccupiedPropertiesQt } =
    useGetPropertyQt();
  const screenHeight = useGetScreenHeight();
  const { dataAllOccupiedQt = null, statusAllOccupiedQt } = useGetOccupiedQt();

  // FUNCTIONS

  // JSX
  if (
    statusTotals === "success" &&
    statusFlatsHome === "success" &&
    statusAllOccupiedPropertiesQt === "success" &&
    statusAllOccupiedQt === "success" &&
    statusRoomsHome === "success" &&
    statusShopsHome === "success"
  ) {
    return (
      <div
        style={{
          height: `calc(${screenHeight}px - 60px)`,
        }}
        className="flex justify-center overflow-x-hidden overflow-y-scroll"
      >
        <div className="grid grid-rows-[auto_auto_auto_auto_auto_auto_auto] gap-[30px] px-[5px] pb-[20px] pt-[10px] largeScreen:w-[900px]">
          {/* total flats etc */}
          <Totals dataTotals={dataTotals} />

          {/* flats */}
          <FlatsDisplayHome dataFlatsHome={dataFlatsHome} />

          {/* check other propertied */}
          <CheckOtherProperties />

          {/* flats */}
          <RoomsDisplayHome dataRoomsHome={dataRoomsHome} />

          {/* shops */}
          <CircularCharts
            dataTotals={dataTotals}
            dataAllOccupiedPropertiesQt={dataAllOccupiedPropertiesQt}
            dataAllOccupiedQt={dataAllOccupiedQt}
          />

          {/* flats */}
          <ShopsDisplayHome dataShopsHome={dataShopsHome} />

          {/* shops */}
          <PropertyValueChart />
        </div>
      </div>
    );
  }

  if (
    statusTotals === "pending" ||
    statusFlatsHome === "pending" ||
    statusAllOccupiedPropertiesQt === "pending" ||
    statusAllOccupiedQt === "pending" ||
    statusRoomsHome === "pending" ||
    statusShopsHome === "pending"
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
