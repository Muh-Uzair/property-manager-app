import PropTypes from "prop-types";

// import TenantItemHeading from "./TenantItemHeading";
// import Heading from "../../../../ui/Heading";

// COMPONENT START
TenantDetailItem.propTypes = {
  icon: PropTypes.node,
  itemHeading: PropTypes.string,
  itemValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.node,
    // You can add other types here as needed
  ]),
};
export default function TenantDetailItem({ icon, itemHeading, itemValue }) {
  // JSX
  return (
    <div className="grid grid-cols-[40px_1fr] gap-[3px] rounded-[5px] bg-gray-200 p-[3px]">
      <div className="flex items-center justify-center">
        <span className="rounded-full bg-sky-200 p-[7px]"> {icon} </span>
      </div>
      <div className="flex flex-col justify-center">
        {/* <span className={`text-[15px] font-semibold`}>{itemHeading}</span> */}
        <span className="text-[11px] font-semibold smallTab:text-[14px]">
          {itemHeading}
        </span>
        <span className="text-wrap text-[10px] font-semibold text-gray-600 smallTab:text-[12px]">
          {itemValue}
        </span>
      </div>
    </div>
  );
}
// COMPONENT END
