import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const TenantOperationLayout = ({ children }) => {
  const location = useLocation();
  const host = window.location.host;
  const protocol = window.location.protocol;

  return (
    <div className="bg-red flex h-[100vh] justify-center overflow-auto">
      <div className="w-full max-w-[800px]">
        <div className="p-[10px]">
          <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
            <TenantOperationButtonRent
              buttonText="Rent payment"
              url={`/tenant-operation-page/rent-payment${location.search}`}
            />
            <TenantOperationButtonComplaint
              buttonText="Register complaint"
              url={`/tenant-operation-page/register-complaint${location.search}`}
            />
          </div>
          <div className="mt-[10px]">{children}</div>
          <div>
            <Link to={`${protocol}//${host}/login-as`}>
              <button className="flex w-full items-center justify-center rounded-sm border-[1px] border-sky-500 bg-sky-200 px-[10px] py-[5px] font-semibold text-gray-700">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const TenantOperationButtonRent = ({ buttonText = "button", url = "/" }) => {
  return (
    <TenantOperationButton
      buttonText={buttonText}
      includes="rent-payment"
      url={url}
    />
  );
};

const TenantOperationButtonComplaint = ({
  buttonText = "button",
  url = "/",
}) => {
  return (
    <TenantOperationButton
      buttonText={buttonText}
      includes="register-complaint"
      url={url}
    />
  );
};

const TenantOperationButton = ({ includes, buttonText, url }) => {
  const location = useLocation();

  if (location.pathname.includes(includes)) {
    return (
      <button className="w-full rounded-[5px] border-[1px] border-sky-700 bg-sky-200 px-[10px] py-[5px] font-semibold text-sky-700">
        {" "}
        {buttonText}{" "}
      </button>
    );
  }
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

TenantOperationButtonRent.propTypes = {
  buttonText: PropTypes.string,
  url: PropTypes.string,
};

TenantOperationButtonComplaint.propTypes = {
  buttonText: PropTypes.string,
  url: PropTypes.string,
};

TenantOperationButton.propTypes = {
  includes: PropTypes.string,
  buttonText: PropTypes.string,
  url: PropTypes.string,
};

TenantOperationLayout.propTypes = {
  children: PropTypes.node,
};

export default TenantOperationLayout;
