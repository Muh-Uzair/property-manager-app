import { HiOutlineHome, HiOutlineSave } from "react-icons/hi";
import { Logo } from "./Logo";
import { SidebarNavLinks } from "./SidebarNavLinks";
import { HiOutlineBanknotes } from "react-icons/hi2";

// COMPONENT START///////////////////////////////////////////////
export default function Sidebar() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <aside className="grid h-[100%] grid-rows-[auto_1fr] border-[1px] border-stone-200 bg-white transition-all duration-300 ease-in-out">
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
    </aside>
  );
  // JSX//////////////////////L///////////////////
}

// COMPONENT END/////////////////////////////////////////////////
