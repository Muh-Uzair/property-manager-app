import PropTypes from "prop-types";

// COMPONENT START
export default function LoadingWrapperCenter({ children }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="flex h-full w-full items-center justify-center">
      {children}
    </div>
  );
  // JSX
}

LoadingWrapperCenter.propTypes = {
  children: PropTypes.node,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
