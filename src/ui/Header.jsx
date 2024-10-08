import { TbClipboardText, TbUser } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiLineChartDown } from "react-icons/bi";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";

import NavigationLinks from "./NavigationLinks";
import Uploader from "../features/Uploader/Uploader";
import { brandColor500 } from "../styles/globalStyles";
import { NameLogo } from "./NameLogo";
// COMPONENT START///////////////////////////////////////////////
export function Header() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <header className="grid grid-cols-[auto_1fr_auto] gap-[10px] bg-gray-100">
      <NameLogo />

      <div className="flex items-center justify-center smallTab:hidden">
        <nav>
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
              {
                url: "leaveProperty",
                label: "Leave Property",
                icon: <HiMiniArrowRightOnRectangle />,
              },
            ]}
          />
        </nav>
      </div>

      <div className="smallTab: col-start-3 flex items-center gap-[5px] pr-[10px] smallTab:gap-[18px] smallTab:pr-[20px]">
        <Uploader />
        <UserDetails />
      </div>
    </header>
  );
  // JSX//////////////////////////////////////////
}

// COMPONENT START
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
// COMPONENT END
