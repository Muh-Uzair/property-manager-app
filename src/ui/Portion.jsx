import PropTypes from "prop-types";

export default function Portion({
  type = "vertical",
  gap = 20,
  children,
  width,
}) {
  if (type === "horizontal") {
    return (
      <div className={`flex ${width} h-[100%] flex-col gap-[${gap}px]`}>
        {children}
      </div>
    );
  }
  if (type === "vertical") {
    return (
      <div className={`flex ${width} h-[100%] gap-[${gap}px]`}>{children}</div>
    );
  }
}

Portion.propTypes = {
  type: PropTypes.string.isRequired,
  gap: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
};
