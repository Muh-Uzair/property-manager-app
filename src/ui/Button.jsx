import PropTypes from "prop-types";


const medium = "text-[12px]"

// COMPONENT START
export default function Button({ size = "medium", children, type }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return <button className={}>{children}</button>;
  // JSX
}

Button.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
