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
          className="mb-[8px] flex h-[40px] w-[100%] flex-row rounded-[5px] transition-all duration-300 ease-in-out"
        >
          <NavLink
            to={`/${val.url}`}
            className={({ isActive }) =>
              `duration-180 grid w-[100%] grid-cols-[25px_1fr] items-center rounded-[5px] pl-[12px] font-semibold transition-all ease-in-out ${isActive ? "border-[1px] border-cyan-400 bg-sky-100 text-cyan-500" : "border-[1px] border-gray-200 bg-stone-50 text-black/60 hover:bg-gray-100"}`
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
