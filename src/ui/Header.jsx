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
    <header className="flex justify-between border-b-[1px] border-sky-200 bg-gray-100">
      <NameLogo />

      <div className="flex items-center gap-[18px] pr-[20px]">
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
