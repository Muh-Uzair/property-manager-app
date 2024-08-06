import { Logo } from "./Logo";

// COMPONENT END/////////////////////////////////////////////////
// COMPONENT START///////////////////////////////////////////////
export function NameLogo() {
  // STATE & VARIABLES
  // FUNCTIONS
  // JSX//////////////////////////////////////////
  return (
    <div className="flex items-center gap-[5px] pl-[10px]">
      <Logo size={"30px"} color={"0ea5e9"} />
      <spans className="text-[20px] font-bold text-sky-500">PROPTYFY</spans>
    </div>
  );
  // JSX//////////////////////////////////////////
}
