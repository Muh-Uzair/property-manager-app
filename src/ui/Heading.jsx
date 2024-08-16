import PropTypes from "prop-types";

const primary = "text-[30px] font-bold";
const medium_small = "text-[20px] font-semibold";

// COMPONENT START
export default function Heading({ type, children, headingColor }) {
  // VARIABLES

  // FUNCTIONS

  // JSX

  if (type === "primary") {
    return (
      <span className={type === "primary" ? primary : ""}>{children}</span>
    );
  }

  if (type === "medium_small") {
    return (
      <span
        className={`${medium_small} ${headingColor.length > 0 ? headingColor : ""}`}
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
};
