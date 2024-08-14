import PropertyDetailsTable from "../features/ShowPropertyDetails/PropertyDetailsTable";
import PropertyChangeButtons from "../features/ShowPropertyDetails/PropertyChangeButtons";
import { useParams } from "react-router-dom";
import Heading from "../ui/Heading";

// COMPONENT START///////////////////////////////////////////////
export default function PropertyDetailsPG() {
  // VARIABLES
  const { propertyType } = useParams();

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <div className="flex h-[100%] flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <Heading type="primary">
          {!propertyType && "Flats"}
          {propertyType &&
            `${propertyType?.charAt(0).toUpperCase()}${propertyType?.slice(1).toLowerCase()}`}
        </Heading>
        <PropertyChangeButtons buttonLabelsArr={["FLATS", "ROOMS", "SHOPS"]} />
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
