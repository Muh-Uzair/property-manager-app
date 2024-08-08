import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";
import PropTypes from "prop-types";

// COMPONENT START///////////////////////////////////////////////
export default function Table({ dataFlats }) {
  // JSX//////////////////////////////////////////
  return (
    <>
      {/* table header */}
      <TableHeader
        colLabels={["IMAGE", "FLAT NO", "STATUS", "FLOOR", "RENT", "RENTER"]}
        colSize={["1fr", "1fr", "1fr", "1fr", "1fr", "1fr"]}
        backgroundColor={"#38bdf8"}
      />
      {/* table body */}

      <TableBody dataFlats={dataFlats} />
      {/* table footer */}
      <TableFooter />
    </>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////

function TableBody() {
  return <div>table body</div>;
}

// PropTypes
Table.propTypes = {
  dataFlats: PropTypes.array.isRequired,
};
