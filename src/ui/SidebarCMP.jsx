import { HiOutlineHome } from "react-icons/hi";
import { SidebarNavLinks } from "./SidebarNavLinks";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { TbClipboardText } from "react-icons/tb";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
// import Uploader from "../features/Uploader/Uploader";

// COMPONENT START///////////////////////////////////////////////
export default function Sidebar() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <>
      <nav className="mt-[50px] w-[100%]">
        <SidebarNavLinks
          NavLinksArr={[
            { url: "home", label: "Home", icon: <HiOutlineHome /> },
            {
              url: "property-details",
              label: "Property Details",
              icon: <TbClipboardText />,
            },
            {
              url: "expenses",
              label: "Expenses",
              icon: <HiOutlineBanknotes />,
            },
            {
              url: "admissions",
              label: "Admissions",
              icon: <HiMiniArrowLeftOnRectangle />,
            },
          ]}
        />
      </nav>
      <div className="flex h-[100px] w-[100%] items-center justify-center">
        {/* <button className="rounded-[5px] border-[1px] border-cyan-400 bg-sky-100 px-[20px] py-2 text-xl font-semibold text-cyan-500 transition hover:bg-sky-200">
          Upload
        </button> */}
        {/* <Uploader /> */}
      </div>
    </>
  );
  // JSX//////////////////////L///////////////////
}
