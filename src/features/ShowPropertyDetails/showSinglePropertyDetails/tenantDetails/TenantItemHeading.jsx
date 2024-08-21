import PropTypes from "prop-types";

// COMPONENT START
TenantItemHeading.propTypes = {
  itemHeading: PropTypes.string,
};
export default function TenantItemHeading({ itemHeading }) {
  return <span className={`text-[15px] font-semibold`}>{itemHeading}</span>;
}
// COMPONENT END
