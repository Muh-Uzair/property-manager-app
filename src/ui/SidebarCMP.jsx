import { HiOutlineHome } from "react-icons/hi";
import { TbClipboardText } from "react-icons/tb";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import NavigationLinks from "./NavigationLinks";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiLineChartDown } from "react-icons/bi";

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
              icon: <AiOutlineDollarCircle />,
            },
            {
              url: "expenses",
              label: "Expenses",
              icon: <BiLineChartDown />,
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
