import PropTypes from "prop-types";

const primary = "text-[30px] font-bold";

// COMPONENT START
export default function Heading({ type, headingText = "", children = null }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  if (headingText.length === 0 && children && type.length > 0) {
    return (
      <span className={type === "primary" ? primary : ""}>{children}</span>
    );
  }
  if (headingText.length > 0 && !children) {
    return (
      <span className={type === "primary" ? primary : ""}>{headingText}</span>
    );
  }

  // JSX
}
// COMPONENT END

Heading.propTypes = {
  type: PropTypes.string.isRequired, // Ensure 'type' is a required string
  headingText: PropTypes.string, // 'headingText' is an optional string
  children: PropTypes.node, // 'children' can be any renderable content
};
