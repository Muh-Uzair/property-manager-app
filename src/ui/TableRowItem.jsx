import PropTypes from "prop-types";

// COMPONENT START
export default function TableRowItem({ children }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return <div className="flex items-center justify-center">{children}</div>;
  // JSX
}

TableRowItem.propTypes = {
  children: PropTypes.node,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
