import PropTypes from "prop-types";

// COMPONENT START
export default function FormButton({
  type,
  children,
  styleType = "primary",
  onClick,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  if (styleType === "primary") {
    return (
      <button
        className="rounded-[3px] bg-brand-color-500 px-[8px] py-[2px] font-semibold text-white active:bg-brand-color-600 largeScreen:hover:bg-brand-color-400 largeScreen:active:to-brand-color-600"
        type={type}
      >
        {children}
      </button>
    );
  }

  if (styleType === "red") {
    return (
      <button
        className="rounded-[3px] bg-red-500 px-[8px] py-[2px] font-semibold text-white active:bg-red-600 largeScreen:hover:bg-red-400 largeScreen:active:to-red-600"
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  // JSX
}

FormButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  styleType: PropTypes.string,
  onClick: PropTypes.func,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
