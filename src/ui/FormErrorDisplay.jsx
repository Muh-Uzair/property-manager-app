import PropTypes from "prop-types";

// COMPONENT START
export default function FormErrorDisplay({ children }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <p className="text-[11px] font-semibold text-red-400">{`${children}`}</p>
  );
  // JSX
}

FormErrorDisplay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
