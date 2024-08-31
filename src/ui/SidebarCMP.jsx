import { HiOutlineHome } from "react-icons/hi";
import { TbClipboardText } from "react-icons/tb";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import NavigationLinks from "./NavigationLinks";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";

// COMPONENT START///////////////////////////////////////////////
export default function Sidebar() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <>
      <nav className="mt-[50px] w-[100%]">
        <NavigationLinks
          navigationLinksArr={[
            { url: "home", label: "Home", icon: <HiOutlineHome /> },
            {
              url: "propertyDetails",
              label: "Property Details",
              icon: <TbClipboardText />,
            },
            {
              url: "rentPayment",
              label: "Rent Payment",
              icon: <GiReceiveMoney />,
            },
            {
              url: "expenses",
              label: "Expenses",
              icon: <GiPayMoney />,
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
