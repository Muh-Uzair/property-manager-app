import { HiOutlineHome, HiOutlineSave } from "react-icons/hi";
import { Logo } from "./Logo";
import { SidebarNavLinks } from "./SidebarNavLinks";
import { HiOutlineBanknotes } from "react-icons/hi2";
import Uploader from "../features/Uploader/Uploader";

// COMPONENT START///////////////////////////////////////////////
export default function Sidebar() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <aside className="grid h-[100%] grid-rows-[auto_1fr_auto] border-[1px] border-stone-200 bg-white transition-all duration-300 ease-in-out">
      <div className="flex h-[110px] items-center justify-center">
        <Logo />
      </div>

      <nav className="flex w-[100%] justify-center p-[10px]">
        <SidebarNavLinks
          NavLinksArr={[
            { url: "home", label: "Home", icon: <HiOutlineHome /> },
            {
              url: "property-details",
              label: "Property Details",
              icon: <HiOutlineSave />,
            },
            {
              url: "expenses",
              label: "Expenses",
              icon: <HiOutlineBanknotes />,
            },
            { url: "admissions", label: "Admissions", icon: <HiOutlineSave /> },
          ]}
        />
      </nav>
      <div className="flex h-[100px] w-[100%] items-center justify-center">
        {/* <button className="rounded-[5px] border-[1px] border-cyan-400 bg-sky-100 px-[20px] py-2 text-xl font-semibold text-cyan-500 transition hover:bg-sky-200">
          Upload
        </button> */}
        <Uploader />
      </div>
    </aside>
  );
  // JSX//////////////////////L///////////////////
}
