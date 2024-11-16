import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import Totals from "./Totals";
import { useGetAllTotals } from "./useGetAllTotals";
import LoadingSpinner from "@/ui/LoadingSpinner";

// COMPONENT START
export default function Home() {
  // VARIABLES
  const { dataTotals, statusTotals } = useGetAllTotals();

  // FUNCTIONS

  // JSX
  if (statusTotals === "success") {
    return (
      <div className="flex flex-col gap-[10px] largeScreen:pl-[20%] largeScreen:pr-[20%]">
        {/* total flats etc */}
        <Totals dataTotals={dataTotals} />

        {/* flats*/}
        <section>flats</section>

        {/* rooms */}
        <section>rooms</section>

        {/* shops */}
        <section>rooms</section>

        {/* shops */}
        <section>charts</section>
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
