import Heading from "../ui/Heading";
import PropertyChangeBtns from "../ui/PropertyChangeBtns";
import { useGetPropertyType } from "../hooks/useGetPropertyType";
import PropertyDetailsTable from "@/features/showPropertyDetails/PropertyDetailsTable";

// COMPONENT START///////////////////////////////////////////////
export default function PropertyDetailsPG() {
  // VARIABLES
  const propertyType = useGetPropertyType();

  // FUNCTION

  // JSX//////////////////////////////////////////
  return (
    <div className="flex h-[100%] flex-col gap-[20px] largeScreen:px-[150px]">
      <div className="flex items-center justify-between">
        <Heading type="primary">
          {!propertyType && "Flats"}
          {propertyType &&
            `${propertyType?.charAt(0).toUpperCase()}${propertyType?.slice(1).toLowerCase()}`}
        </Heading>
        <PropertyChangeBtns
          btnsUrlArr={[
            { label: "flats", url: "propertyDetails/flats" },
            { label: "rooms", url: "propertyDetails/rooms" },
            { label: "shops", url: "propertyDetails/shops" },
          ]}
        />
      </div>

      {/* property table */}
      <PropertyDetailsTable />
    </div>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////
