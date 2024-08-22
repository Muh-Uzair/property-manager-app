import PropTypes from "prop-types";

const primary = "text-[30px] font-bold";
const medium_large = "text-[18px]";
const medium = "text-[15px] font-semibold";
// COMPONENT START
export default function Heading({
  type,
  children,
  headingColor = "",
  uppercase,
  bold,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX

  if (type === "primary") {
    return (
      <span className={type === "primary" ? primary : ""}>{children}</span>
    );
  }

  if (type === "medium_large") {
    return (
      <span
        className={`${medium_large} ${headingColor.length > 0 ? headingColor : ""} ${uppercase ? "uppercase" : ""} ${bold ? "font-bold" : "font-semibold"}`}
      >
        {children}
      </span>
    );
  }

  if (type === "medium") {
    return (
      <span
        className={`${medium} ${uppercase ? "uppercase" : ""} ${headingColor ? headingColor : ""}`}
      >
        {children}
      </span>
    );
  }

  // JSX
}
// COMPONENT END

Heading.propTypes = {
  type: PropTypes.string.isRequired, // Ensure 'type' is a required string
  children: PropTypes.node.isRequired, // 'children' can be any renderable content
  headingColor: PropTypes.string,
  uppercase: PropTypes.bool,
  bold: PropTypes.bool,
};
