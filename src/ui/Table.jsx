import TableHeader from "./TableHeader";

// COMPONENT START///////////////////////////////////////////////
export default function Table() {
  // JSX//////////////////////////////////////////
  return (
    <div>
      {/* table header */}
      <TableHeader
        colLabels={["IMAGE", "FLAT NO", "STATUS", "FLOOR", "RENT", "RENTER"]}
        colSize={["1fr", "1fr", "1fr", "1fr", "1fr", "1fr"]}
        backgroundColor={"#38bdf8"}
      />
      {/* table body */}
      <div>table body</div>
      {/* table footer */}
      <TableFooter />
    </div>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////

// COMPONENT START
function TableFooter() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <footer className="rounded-b-[8px] bg-gray-200">
      <button>back</button>
      <button>next</button>
    </footer>
  );
  // JSX
}
// COMPONENT END
