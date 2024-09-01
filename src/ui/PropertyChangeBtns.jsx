import PropTypes from "prop-types";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// COMPONENT START
export default function PropertyChangeBtns({ btnsUrlArr }) {
  // VARIABLES

  const navigate = useNavigate();

  // FUNCTIONS
  useEffect(() => {
    function goToDefaultUrl() {
      navigate(`/${btnsUrlArr[0].url}`);
    }
    if (btnsUrlArr.length) goToDefaultUrl();
  }, [btnsUrlArr, navigate]);

  // JSX
  return (
    <ul className="flex gap-[5px] rounded-[3px] bg-brand-color-200/70 px-[5px] py-[3px] text-[12px] uppercase">
      {btnsUrlArr.map((val, i) => (
        <li key={i}>
          <NavLink
            to={`/${val.url}`}
            className={({ isActive }) =>
              [
                "rounded-sm px-[5px] font-semibold",
                isActive
                  ? "bg-brand-color-500 text-white"
                  : "bg-brand-color-300 text-brand-color-700",
              ].join(" ")
            }
          >
            <span>{val.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
  // JSX
}
PropertyChangeBtns.propTypes = {
  btnsUrlArr: PropTypes.array,
};
// COMPONENT END
