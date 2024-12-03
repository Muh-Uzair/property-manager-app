import PropTypes from "prop-types";

// COMPONENT START
TenantDetailsIcon.propTypes = {
  icon: PropTypes.node.isRequired,
};
export default function TenantDetailsIcon({ icon }) {
  return (
    <div className="flex items-center justify-center">
      <span className="rounded-full bg-sky-200 p-[7px]"> {icon} </span>
    </div>
  );
}
// COMPONENT END
