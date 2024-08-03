import { HiOutlineCash, HiOutlineHome, HiOutlineSave } from "react-icons/hi";
import { Logo } from "./Logo";
import { SidebarNavLinks } from "./SidebarNavLinks";

// COMPONENT START///////////////////////////////////////////////
export default function Sidebar() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <aside className="grid h-[100%] grid-rows-[auto_1fr] border-[1px] border-stone-200 bg-white">
      <div className="flex h-[110px] items-center justify-center">
        <Logo />
      </div>

      <nav className="flex w-[100%] justify-center bg-red-300 p-[10px]">
        <SidebarNavLinks
          NavLinksArr={[
            { url: "home", label: "Home", icon: <HiOutlineHome /> },
            { url: "expenses", label: "Expenses", icon: <HiOutlineCash /> },
            { url: "admissions", label: "Admissions", icon: <HiOutlineSave /> },
          ]}
        />
      </nav>
    </aside>
  );
  // JSX//////////////////////L///////////////////
}

// COMPONENT END/////////////////////////////////////////////////
