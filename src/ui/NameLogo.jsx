import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { brandColor500 } from "../styles/globalStyles";

// COMPONENT END/////////////////////////////////////////////////
// COMPONENT START///////////////////////////////////////////////
export function NameLogo() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <div className="flex items-center pl-[10px]">
      <Logo size={"30px"} color={brandColor500} />
      <NamePropleLogo />
    </div>
  );
  // JSX//////////////////////////////////////////
}

const NamePropleLogo = () => {
  const navigate = useNavigate();
  return (
    <span
      className={`cursor-pointer pl-[5px] text-[20px] font-bold`}
      style={{ color: brandColor500 }}
      onClick={() => navigate("/home")}
    >
      PROPLE
    </span>
  );
};
