import PropTypes from "prop-types";

// import TenantItemHeading from "./TenantItemHeading";
import Heading from "../../../../ui/Heading";

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
    <div className="grid grid-cols-[70px_1fr] rounded-[5px] bg-gray-200">
      <div className="flex items-center justify-center">
        <span className="rounded-full bg-sky-200 p-[10px]"> {icon} </span>
      </div>
      <div className="flex flex-col justify-center">
        {/* <span className={`text-[15px] font-semibold`}>{itemHeading}</span> */}
        <Heading type={"medium"} uppercase={true}>
          {itemHeading}
        </Heading>
        <span className="text-[13px] font-semibold text-gray-600">
          {itemValue}
        </span>
      </div>
    </div>
  );
}
// COMPONENT END
