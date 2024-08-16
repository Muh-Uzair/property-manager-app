import PropTypes from "prop-types";
import { useState } from "react";
import TableRow from "./TableRow";

// COMPONENT START
export default function TableBody({ dataProperty, colSize }) {
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
    <div className="border-x-[1px] border-gray-200 text-[12px] font-semibold text-gray-400">
      {dataProperty?.map((val) => (
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
// COMPONENT END

TableBody.propTypes = {
  dataProperty: PropTypes.array.isRequired,
  colSize: PropTypes.array.isRequired,
};
