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
    <ul className="flex items-center justify-center gap-[15px]">
      {navigationLinksArr.map((val, i) => (
        <li key={i}>
          <NavLink
            to={val.url}
            className={({ isActive }) =>
              `flex text-brand-color-500 ${isActive ? "text-brand-color-700" : ""}`
            }
          >
            <span className="text-[25px]">{val.icon}</span>
            <span className="hidden">{val.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
  // JSX
}
// COMPONENT END
