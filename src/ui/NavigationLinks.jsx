import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// COMPONENT START
NavigationLinks.propTypes = {
  navigationLinksArr: PropTypes.array,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

export default function NavigationLinks({ navigationLinksArr }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <ul className="flex flex-row items-center justify-center gap-[15px] smallTab:w-[100%] smallTab:flex-col smallTab:gap-[0px]">
      {navigationLinksArr.map((val, i) => (
        <li key={i} className="smallTab:w-[100%]">
          <NavLink
            to={val.url}
            className={({ isActive }) =>
              `flex items-center justify-center smallTab:h-[42px] largeTab:justify-start largeTab:gap-[8px] largeTab:pl-[15px] ${isActive ? "text-brand-color-700 smallTab:w-[100%] smallTab:bg-brand-color-700 smallTab:text-white" : "text-brand-color-500 smallTab:text-white"}`
            }
          >
            <span className="text-[25px] smallTab:text-base">{val.icon}</span>
            <span className="hidden font-semibold largeTab:block">
              {val.label}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
  // JSX
}
// COMPONENT END
