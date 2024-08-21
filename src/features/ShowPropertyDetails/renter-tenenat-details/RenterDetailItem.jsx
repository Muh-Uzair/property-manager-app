import TenantItemHeading from "./TenantItemHeading";
import PropTypes from "prop-types";

// COMPONENT START
RenterDetailItem.propTypes = {
  icon: PropTypes.node,
  itemHeading: PropTypes.string,
  itemValue: PropTypes.string,
};
export default function RenterDetailItem({ icon, itemHeading, itemValue }) {
  // JSX
  return (
    <div className="grid grid-cols-[70px_1fr] rounded-[5px] bg-gray-200">
      <div className="flex items-center justify-center">
        <span className="rounded-full bg-sky-200 p-[10px]"> {icon} </span>
      </div>
      <div className="flex flex-col justify-center">
        {/* <span className={`text-[15px] font-semibold`}>{itemHeading}</span> */}
        <TenantItemHeading itemHeading={itemHeading} />
        <span className="text-[13px] font-semibold text-gray-600">
          {itemValue}
        </span>
      </div>
    </div>
  );
}
// COMPONENT END
