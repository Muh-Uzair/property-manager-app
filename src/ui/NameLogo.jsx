import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { brandColor500 } from "../styles/globalStyles";

// COMPONENT START///////////////////////////////////////////////
export function NameLogo({ logoSize = "30px" }) {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="flex items-center pl-[10px]">
      <Logo size={logoSize} />
      <NamePropleLogo />
    </div>
  );
  // JSX
}

NameLogo.propTypes = {
  logoSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const NamePropleLogo = ({
  namePropleSize = "20px",
  loginForm = false,
}) => {
  const navigate = useNavigate();
  return (
    <p
      className={`cursor-pointer pl-[5px] text-[${namePropleSize}] font-bold`}
      style={{ color: brandColor500 }}
      onClick={
        loginForm
          ? () => {
              return null;
            }
          : () => navigate("/home")
      }
    >
      PROPLE
    </p>
  );
};

NamePropleLogo.propTypes = {
  namePropleSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loginForm: PropTypes.bool,
};
