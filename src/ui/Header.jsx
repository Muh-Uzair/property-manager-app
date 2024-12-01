import { TbClipboardText } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";

import NavigationLinks from "./NavigationLinks";
// import Uploader from "../features/Uploader/Uploader";

import { NameLogo } from "./NameLogo";
import { Logo } from "./Logo";
import { UserDetails } from "./UserDetails";
import { useGetUser } from "@/features/auth/useGetUser";

// COMPONENT START
export function Header() {
  // VARIABLES
  const { dataUser } = useGetUser();
  const {
    email = "test@gamil.com",
    user_metadata: { userName = "testUser" },
  } = dataUser;

  const userNameEmail = {
    email,
    userName,
  };

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <header className="grid grid-cols-[auto_1fr_auto] gap-[20px] bg-gray-100 smallTab:grid-cols-[auto_1fr_auto]">
      <div className="hidden smallTab:flex">
        <NameLogo />
      </div>

      <div className="ml-[10px] flex items-center smallTab:hidden">
        <Logo size="25px" />
      </div>

      <div className="flex items-center justify-center smallTab:hidden">
        <nav className="w-full mobileM:w-[250px]">
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
            ]}
          />
        </nav>
      </div>

      <div className="smallTab: col-start-3 flex items-center gap-[5px] pr-[10px] smallTab:gap-[18px] smallTab:pr-[20px]">
        {/* <Uploader /> */}
        <UserDetails userNameEmail={userNameEmail} />
      </div>
    </header>
  );
  // JSX
}
