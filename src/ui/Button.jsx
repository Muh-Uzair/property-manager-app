import PropTypes from "prop-types";

const primaryStyles =
  "rounded-[3px] px-[10px] font-semibold text-white focus:outline-none";

// COMPONENT START
export default function Button({
  size = "medium",
  children,
  type = "primary",
  wide = false,
  uppercase = false,
  disabled = false,
  onClick,
  paddingY = "3px",
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX

  if (type === "primary") {
    return (
      <button
        disabled={disabled}
        className={`bg-brand-color-500 active:bg-brand-color-600 disabled:cursor-not-allowed disabled:opacity-35 largeScreen:hover:bg-brand-color-400 largeScreen:active:bg-brand-color-600 ${uppercase ? "uppercase" : ""} ${primaryStyles} ${wide ? "w-full" : ""} ${size === "medium" ? "text-12px" : size === "large" ? "text-15px" : ""} py-[${paddingY}]`}
      >
        {children}
      </button>
    );
  }

  if (type === "red") {
    return (
      <button
        onClick={() => onClick()}
        disabled={disabled}
        className={`bg-red-600 active:bg-red-500 disabled:cursor-not-allowed disabled:opacity-35 largeScreen:hover:bg-red-400 largeScreen:active:bg-red-500 ${uppercase ? "uppercase" : ""} ${primaryStyles} ${wide ? "w-full" : ""} ${size === "medium" ? "text-12px" : size === "large" ? "text-15px" : ""}`}
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
  onClick: PropTypes.func,
  paddingY: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
