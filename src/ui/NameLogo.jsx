import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

// COMPONENT END/////////////////////////////////////////////////
// COMPONENT START///////////////////////////////////////////////
export function NameLogo() {
  // STATE & VARIABLES

  const navigate = useNavigate();

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <div className="flex items-center pl-[10px]">
      <Logo size={"30px"} color={"0ea5e9"} />
      <spans
        className="cursor-pointer pl-[5px] text-[20px] font-bold text-sky-500"
        onClick={() => navigate("/home")}
      >
        PROPLE
      </spans>
    </div>
  );
  // JSX//////////////////////////////////////////
}
