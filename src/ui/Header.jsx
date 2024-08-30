import { NameLogo } from "./NameLogo";
import { TbUser } from "react-icons/tb";

import Uploader from "../features/Uploader/Uploader";
import { brandColor500 } from "../styles/globalStyles";

// COMPONENT START///////////////////////////////////////////////
export function Header() {
  // STATE & VARIABLES
  // FUNCTIONS
  // JSX//////////////////////////////////////////
  return (
    <header className="grid grid-cols-[auto_1fr_auto] items-center gap-[10px] bg-gray-100">
      <NameLogo />

      <div className="bg-green-300">nav links</div>

      <div className="flex items-center gap-[5px] pr-[10px] smallTab:gap-[18px] smallTab:pr-[20px]">
        <Uploader />
        <UserDetails />
      </div>
    </header>
  );
  // JSX//////////////////////////////////////////
}

const UserDetails = () => {
  return (
    <div
      className={`flex h-[35px] w-[35px] items-center justify-center rounded-full`}
      style={{ backgroundColor: `${brandColor500}` }}
    >
      <TbUser size={"20px"} color={"white"} />
    </div>
  );
};
