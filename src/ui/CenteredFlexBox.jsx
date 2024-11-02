import PropTypes from "prop-types";

// COMPONENT START
export default function CenteredFlexBox({ children }) {
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

CenteredFlexBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
