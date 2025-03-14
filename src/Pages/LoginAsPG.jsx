import PropTypes from "prop-types";
import { NamePropleLogo } from "@/ui/NameLogo";
import { Link } from "react-router-dom";

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
        <LoginAsButton buttonText="Login as Tenant" />
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
