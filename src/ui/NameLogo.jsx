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
      <Logo size={"30px"} />
      <NamePropleLogo />
    </div>
  );
  // JSX//////////////////////////////////////////
}

export const NamePropleLogo = () => {
  const navigate = useNavigate();
  return (
    <span
      className={`hidden cursor-pointer pl-[5px] text-[20px] font-bold smallTab:block`}
      style={{ color: brandColor500 }}
      onClick={() => navigate("/home")}
    >
      PROPLE
    </span>
  );
};
