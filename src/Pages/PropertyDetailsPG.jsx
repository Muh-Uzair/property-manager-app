import PropertyDetailsTable from "../features/ShowPropertyDetails/PropertyDetailsTable";
// import PropertyChangeButtons from "../ui/PropertyChangeButtons";
import Heading from "../ui/Heading";
import { useGetPropertyType } from "../hooks/useGetPropertyType";
import PropertyChangeBtns from "../ui/PropertyChangeBtns";

// COMPONENT START///////////////////////////////////////////////
export default function PropertyDetailsPG() {
  // VARIABLES
  const propertyType = useGetPropertyType();

  // FUNCTION

  // JSX//////////////////////////////////////////
  return (
    <div className="flex h-[100%] flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <Heading type="primary">
          {!propertyType && "Flats"}
          {propertyType &&
            `${propertyType?.charAt(0).toUpperCase()}${propertyType?.slice(1).toLowerCase()}`}
        </Heading>
        {/* <PropertyChangeButtons buttonLabelsArr={["FLATS", "ROOMS", "SHOPS"]} /> */}
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

// function PropertyTypeHeading() {
//   const { propertyType } = useParams();

//   return (
//     <span className="text-[30px] font-bold">
//       {!propertyType && "Flats"}
//       {propertyType &&
//         `${propertyType?.charAt(0).toUpperCase()}${propertyType?.slice(1).toLowerCase()}`}
//     </span>
//   );
// }
