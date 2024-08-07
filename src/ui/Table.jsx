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
      <footer>table footerr</footer>
    </div>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////
