import PropTypes from "prop-types";
import { NamePropleLogo } from "@/ui/NameLogo";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginAsPg = () => {
  return (
    <div className="flex h-[100vh] w-[100%] flex-col items-center justify-start gap-[20px] pt-[50px] smallTab:pt-[100px] largeTab:pt-[150px]">
      <div>
        <NamePropleLogo loginForm={true} namePropleSize={"50px"} />
      </div>
      <div>
        <p className="text-center font-bold text-red-600">
          Please identify yourself: Are you an admin or a tenant?
        </p>
      </div>

      <div>
        <LoginAsButton buttonText="Login as Admin" />
      </div>

      <div>
        <LoginAsButtonTenant buttonText="Login as Tenant" />
      </div>
    </div>
  );
};

export default LoginAsPg;

const LoginAsButton = ({ buttonText = "Provide text" }) => {
  return (
    <Link to={`/login?userType=${buttonText.split(" ")[2].toLowerCase()}`}>
      <button className="flex cursor-pointer items-center justify-center rounded border-2 border-brand-color-600 bg-brand-color-200/50 px-4 py-2">
        <p className="text-[22px] font-bold text-brand-color-500">
          {buttonText}
        </p>
      </button>
    </Link>
  );
};

LoginAsButton.propTypes = {
  buttonText: PropTypes.string.isRequired, // Ensures buttonText is a required string
};

const LoginAsButtonTenant = ({ buttonText = "Provide text" }) => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            setShowPropertyTypes((prev) => !prev);
          }}
          className="flex cursor-pointer items-center justify-center rounded border-2 border-brand-color-600 bg-brand-color-200/50 px-4 py-2"
        >
          <p className="text-[22px] font-bold text-brand-color-500">
            {buttonText}
          </p>
        </button>
      </div>
      {showPropertyTypes && (
        <div className="mt-[10px] max-w-[300px] rounded-[5px] border-[1px] p-[10px]">
          <div>Select which type of property have you rented ?</div>
          <Link
            to={`/login?userType=${buttonText.split(" ")[2].toLowerCase()}&propertyType=flat`}
          >
            <button className="mt-[10px] w-full border p-[5px] font-semibold">
              Flat
            </button>
          </Link>
          <Link
            to={`/login?userType=${buttonText.split(" ")[2].toLowerCase()}&propertyType=room`}
          >
            <button className="mt-[10px] w-full border p-[5px] font-semibold">
              Room
            </button>
          </Link>
          <Link
            to={`/login?userType=${buttonText.split(" ")[2].toLowerCase()}&propertyType=shop`}
          >
            <button className="mt-[10px] w-full border p-[5px] font-semibold">
              Shop
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

LoginAsButtonTenant.propTypes = {
  buttonText: PropTypes.string.isRequired, // Ensures buttonText is a required string
};
