import PropTypes from "prop-types";

// COMPONENT START///////////////////////////////////////////////
export default function Table({ children }) {
  // JSX//////////////////////////////////////////
  return <div>{children}</div>;
  // JSX//////////////////////////////////////////
}
// PropTypes
Table.propTypes = {
  children: PropTypes.node.isRequired,
};
