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
            {
              url: "rentPayment",
              label: "Rent Payment",
              icon: <HiMiniArrowLeftOnRectangle />,
            },
          ]}
        />
      </nav>
    </>
  );
  // JSX//////////////////////L///////////////////
}
