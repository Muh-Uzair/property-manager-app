import PropTypes from "prop-types";
import Heading from "../../../../ui/Heading";

// COMPONENT START
SinglePropertyDetailsItem.propTypes = {
  itemHeading: PropTypes.string,
  itemValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default function SinglePropertyDetailsItem({ itemHeading, itemValue }) {
  // JSX
  return (
    <div className="flex items-center justify-center gap-[5px] rounded-[3px] bg-sky-300/60 py-[5px] text-[10px]">
      <Heading
        type="medium"
        headingColor={"text-brand-color-600"}
        uppercase={true}
      >
        {itemHeading}
      </Heading>
      <span className="text-[12px] font-bold uppercase text-gray-500">
        {itemValue}
      </span>
    </div>
  );
}
// COMPONENT END
