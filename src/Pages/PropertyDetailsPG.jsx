import PropertyDetailsTable from "../features/ShowPropertyDetails/PropertyDetailsTable";
import PropertyChangeButtons from "../features/ShowPropertyDetails/PropertyChangeButtons";
import { useParams } from "react-router-dom";

// COMPONENT START///////////////////////////////////////////////
export default function PropertyDetailsPG() {
  // VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <div className="flex h-[100%] flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <PropertyTypeHeading />
        <PropertyChangeButtons buttonLabelsArr={["FLATS", "ROOMS", "SHOPS"]} />
      </div>

      {/* property table */}
      <PropertyDetailsTable />
    </div>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////

function PropertyTypeHeading() {
  const { propertyType } = useParams();

  return (
    <div>
      <span className="text-[30px] font-bold">
        {!propertyType && "Flats"}
        {propertyType &&
          `${propertyType?.charAt(0).toUpperCase()}${propertyType?.slice(1).toLowerCase()}`}
      </span>
    </div>
  );
}
