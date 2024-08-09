import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// COMPONENT START///////////////////////////////////////////////
export const SidebarNavLinks = ({ NavLinksArr }) => {
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
              `duration-180 grid w-[100%] grid-cols-[25px_1fr] items-center pl-[12px] font-[500] text-white transition-all ease-in-out ${isActive ? "bg-sky-600" : "hover:bg-sky-700"}`
            }
          >
            <span className="">{val.icon} </span>
            <span>{val.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
  // JSX//////////////////////////////////////////
};

// Prop validation
SidebarNavLinks.propTypes = {
  NavLinksArr: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    }),
  ).isRequired,
};
