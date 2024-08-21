import PropTypes from "prop-types";
import Heading from "../../../../ui/Heading";

// COMPONENT START
SinglePropertyDetailsItem.propTypes = {
  itemHeading: PropTypes.string.isRequired,
  itemValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default function SinglePropertyDetailsItem({ itemHeading, itemValue }) {
  // JSX

  return (
    <div className="flex flex-col items-center justify-center rounded-[8px] bg-sky-300/60">
      <Heading type="medium_small" headingColor={"text-brand-color-600"}>
        {itemHeading}
      </Heading>
      <span className="font-bold text-gray-500">{itemValue}</span>
    </div>
  );
}
// COMPONENT END
