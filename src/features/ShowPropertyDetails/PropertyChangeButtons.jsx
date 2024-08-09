import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

export default function PropertyChangeButtons({ buttonLabelsArr }) {
  // VARIABLES
  const navigate = useNavigate();

  // FUNCTIONS

  // FUNCTION
  useEffect(() => {
    navigate("/property-details/flats");
  }, [navigate]);

  return (
    <div className="flex items-center gap-[3px] rounded-[5px] bg-gray-100 px-[10px] py-[5px] text-[12px] font-semibold text-gray-400">
      {buttonLabelsArr.map((val, i) => (
        <button key={i}>
          <NavLink
            to={`/property-details/${val.toLowerCase()}`}
            className={({ isActive }) =>
              `rounded-[5px] px-[10px] ${isActive ? "bg-sky-200 text-sky-500" : "transition-all hover:rounded-[5px] hover:bg-sky-300 hover:text-white"}`
            }
          >
            {val}
          </NavLink>
        </button>
      ))}
    </div>
  );
}

PropertyChangeButtons.propTypes = {
  buttonLabelsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};
