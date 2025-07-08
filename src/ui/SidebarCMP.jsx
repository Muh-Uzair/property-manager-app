import { HiOutlineHome } from "react-icons/hi";
import { TbClipboardText } from "react-icons/tb";
import {
  HiMiniArrowLeftOnRectangle,
  HiMiniArrowRightOnRectangle,
} from "react-icons/hi2";
import NavigationLinks from "./NavigationLinks";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";

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
              url: "admissions",
              label: "Admissions",
              icon: <HiMiniArrowLeftOnRectangle />,
            },
            {
              url: "leaveProperty",
              label: "Leave Property",
              icon: <HiMiniArrowRightOnRectangle />,
            },
            {
              url: "tenantComplaints",
              label: "Tenant Complaints",
              icon: <MdOutlineSupportAgent />,
            },
            {
              url: "new-bookings",
              label: "New Bookings",
              icon: <FaRegCalendarCheck />,
            },
          ]}
        />
      </nav>
    </>
  );
  // JSX//////////////////////L///////////////////
}
