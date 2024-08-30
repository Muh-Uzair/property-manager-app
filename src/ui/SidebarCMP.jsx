import { HiOutlineHome } from "react-icons/hi";
import { NavLinks } from "./SidebarNavLinks";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { TbClipboardText } from "react-icons/tb";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { MdAttachMoney } from "react-icons/md";

// COMPONENT START///////////////////////////////////////////////
export default function Sidebar() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <>
      <nav className="mt-[50px] w-[100%]">
        <NavLinks
          NavLinksArr={[
            { url: "home", label: "Home", icon: <HiOutlineHome /> },
            {
              url: "propertyDetails",
              label: "Property Details",
              icon: <TbClipboardText />,
            },
            {
              url: "rentPayment",
              label: "Rent Payment",
              icon: <MdAttachMoney />,
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
    </>
  );
  // JSX//////////////////////L///////////////////
}
