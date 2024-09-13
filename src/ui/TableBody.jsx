import PropTypes from "prop-types";
import { useState } from "react";
import TableRow from "../features/ShowPropertyDetails/PropertyDetailsTableRow";

// COMPONENT START
export default function TableBody({ tableData, colSize }) {
  // VARIABLES
  const [optionsMenuOpen, setOptionsMenuOpen] = useState({
    menuOpenStatus: false,
    rowId: null,
  });

  // FUNCTIONS

  // FUNCTION
  const toggleOptionMenu = (id) => {
    if (optionsMenuOpen.rowId !== id)
      setOptionsMenuOpen({ menuOpenStatus: true, rowId: id });

    if (optionsMenuOpen.rowId === id)
      setOptionsMenuOpen({ menuOpenStatus: false, rowId: null });
  };

  // JSX
  return (
    <div className="border-x-[1px] border-gray-200 text-[10px] font-semibold text-gray-400 largeScreen:text-[11px]">
      {tableData?.map((val) => (
        // Table Row
        <TableRow
          colSize={colSize}
          val={val}
          key={val.id}
          toggleOptionMenu={toggleOptionMenu}
          optionsMenuOpen={optionsMenuOpen}
        />
      ))}
    </div>
  );
  // JSX
}
TableBody.propTypes = {
  tableData: PropTypes.array,
  colSize: PropTypes.array,
};
// COMPONENT END
