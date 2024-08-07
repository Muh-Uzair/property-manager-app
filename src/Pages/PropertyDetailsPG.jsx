import Table from "../ui/Table";

// COMPONENT START///////////////////////////////////////////////
export default function PropertyDetailsPG() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <>
      {/* page heading */}
      <div>
        <span className="text-[30px] font-semibold">Flats</span>
      </div>
      {/* property table */}
      <Table
        colLabels={["IMAGE", "FLAT NO", "STATUS", "FLOOR", "RENT", "RENTER"]}
        colSize={["1fr", "1fr", "1fr", "1fr", "1fr", "1fr"]}
      />
    </>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////
