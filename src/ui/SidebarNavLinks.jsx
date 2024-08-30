import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// COMPONENT START///////////////////////////////////////////////
export const NavLinks = ({ NavLinksArr }) => {
  // STATE & VARIABLES
  // FUNCTIONS
  // JSX//////////////////////////////////////////
  return (
    <ul className="w-[100%]">
      {NavLinksArr.map((val, i) => (
        <li
          key={i}
          className="flex h-[42px] w-[100%] flex-row transition-all duration-300 ease-in-out"
        >
          <NavLink
            to={`${val.url}`}
            className={({ isActive }) =>
              `duration-180 w-[100%] font-[500] text-white transition-all ease-in-out smallTab:flex smallTab:items-center smallTab:justify-center largeTab:grid largeTab:grid-cols-[25px_1fr] largeTab:items-center largeTab:pl-[12px] ${isActive ? "bg-sky-600" : "hover:bg-sky-700"}`
            }
          >
            <span className="smallTab:text-[20px] largeTab:text-base">
              {val.icon}{" "}
            </span>
            <span className="hidden largeTab:block">{val.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
  // JSX//////////////////////////////////////////
};

// Prop validation
NavLinks.propTypes = {
  NavLinksArr: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string,
      icon: PropTypes.node,
    }),
  ).isRequired,
};
