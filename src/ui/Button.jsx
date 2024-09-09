import PropTypes from "prop-types";

const primary =
  "bg-brand-color-500 rounded-[3px] px-[10px] py-[3px] font-semibold text-white  active:bg-brand-color-600 focus:outline-none";

// COMPONENT START
export default function Button({
  size = "medium",
  children,
  type = "primary",
  wide = false,
  uppercase = false,
  disabled = false,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX

  if (type === "primary") {
    return (
      <button
        disabled={disabled}
        className={`disabled:cursor-not-allowed disabled:opacity-35 largeScreen:hover:bg-brand-color-400 largeScreen:active:bg-brand-color-600 ${uppercase ? "uppercase" : ""} ${primary} ${wide ? "w-full" : ""} ${size === "medium" ? "text-12px" : size === "large" ? "text-15px" : ""}`}
      >
        {children}
      </button>
    );
  }
  // JSX
}

Button.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  uppercase: PropTypes.bool,
  disabled: PropTypes.bool,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
