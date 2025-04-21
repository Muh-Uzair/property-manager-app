import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TenantOperationLayout = ({ children }) => {
  return (
    <div className="p-[10px]">
      <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
        <TenantOperationButton buttonText="Rent payment" />
        <TenantOperationButton buttonText="Register complaint" />
      </div>
      <div className="mt-[10px]">{children}</div>
    </div>
  );
};

const TenantOperationButton = ({ buttonText = "button", url = "/" }) => {
  return (
    <Link to={url}>
      {" "}
      <button className="w-full rounded-[5px] border-[1px] border-sky-500 px-[10px] py-[5px] font-semibold text-sky-500">
        {" "}
        {buttonText}{" "}
      </button>
    </Link>
  );
};

TenantOperationButton.propTypes = {
  buttonText: PropTypes.string,
  url: PropTypes.string,
};

TenantOperationLayout.propTypes = {
  children: PropTypes.node,
};

export default TenantOperationLayout;
