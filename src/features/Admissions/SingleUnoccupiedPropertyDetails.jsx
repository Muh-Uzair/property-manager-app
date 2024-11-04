import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import { useGetSingleUnoccupiedPropertyData } from "./useGetSingleUnoccupiedPropertyData";
import LoadingSpinner from "@/ui/LoadingSpinner";
import PropertyDetailsCardFormat from "@/ui/PropertyDetailsCardFormat";
import Heading from "@/ui/Heading";
import { useGetPropertyType } from "@/hooks/useGetPropertyType";

const itemGap = "7px";

// COMPONENT START
export default function SingleUnoccupiedPropertyDetails() {
  // VARIABLES
  let { dataSingleUnoccupied = {}, statusSingleUnoccupied } =
    useGetSingleUnoccupiedPropertyData();
  dataSingleUnoccupied = dataSingleUnoccupied?.data?.[0];
  const propertyType = useGetPropertyType();

  if (statusSingleUnoccupied === "success") {
    console.log(dataSingleUnoccupied);
  }

  // FUNCTIONS

  // JSX
  if (statusSingleUnoccupied === "success") {
    return (
      <div className="grid grid-rows-[auto_1fr] gap-[10px]">
        {/* DIVIDER section property details */}
        <section className="grid grid-rows-[auto_auto] gap-[5px]">
          <Heading type="primary">
            {`${propertyType.at(0).toUpperCase()}${propertyType.slice(1, -1)} details`}
          </Heading>

          <div className="grid grid-rows-[180px_1fr] gap-[7px] rounded-[8px] bg-brand-color-200/70 p-[7px] smallTab:grid-rows-[250px_1fr]">
            {/* image div */}
            <figure className="rounded-[5px] bg-gray-100">
              <img
                className="h-full w-full rounded-[5px] object-cover"
                src={dataSingleUnoccupied?.image}
              />
            </figure>

            {/* property details div */}
            <PropertyDetailsCardFormat
              propertyData={dataSingleUnoccupied}
              itemGap={itemGap}
            />
          </div>
        </section>

        {/* DIVIDER section property details */}
        <section>Tenant info collection form</section>
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
