import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// COMPONENT START///////////////////////////////////////////////
export const SidebarNavLinks = ({ NavLinksArr }) => {
  // STATE & VARIABLES
  // FUNCTIONS
  // JSX//////////////////////////////////////////
  return (
    <ul className="flex w-[100%] flex-col items-center">
      {NavLinksArr.map((val, i) => (
        <li
          key={i}
          className="mb-[5px] flex h-[40px] w-[100%] flex-row rounded-[5px] bg-slate-500"
        >
          <NavLink
            to={`/${val.url}`}
            className={({ isActive }) =>
              `flex-rows flex w-[100%] rounded-[5px] bg-white ${isActive ? "bg-green-400" : ""}`
            }
          >
            {val.icon} {val.label}
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
