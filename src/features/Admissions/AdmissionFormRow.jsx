import PropTypes from "prop-types";

// COMPONENT START
export default function AdmissionFormRow({ children }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return <div>{children}</div>;
  // JSX
}

AdmissionFormRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
