import PropertyDetailsTable from "../features/ShowPropertyDetails/PropertyDetailsTable";

// COMPONENT START///////////////////////////////////////////////
export default function PropertyDetailsPG() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <div className="flex flex-col gap-[20px]">
      {/* page heading */}
      <div>
        <span className="text-[30px] font-bold">Flats</span>
      </div>
      {/* property table */}

      <PropertyDetailsTable />
    </div>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////
