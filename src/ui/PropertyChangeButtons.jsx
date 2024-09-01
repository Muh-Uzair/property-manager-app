import { NavLink, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

export default function PropertyChangeButtons({ buttonLabelsArr }) {
  // VARIABLES
  const navigate = useNavigate();
  const { propertyType } = useParams();

  // FUNCTIONS

  // FUNCTION
  useEffect(() => {
    if (!propertyType) navigate("/property-details/flats");
  }, [navigate, propertyType]);

  return (
    <div className="flex items-center gap-[3px] rounded-[5px] bg-gray-100 px-[10px] py-[5px] text-[12px] font-semibold text-gray-400">
      {buttonLabelsArr.map((val, i) => (
        <button key={i}>
          <NavLink
            to={`/property-details/${val.toLowerCase()}`}
            className={({ isActive }) =>
              `rounded-[3px] px-[10px] py-[2px] ${isActive ? "bg-sky-200 text-sky-500" : "transition-all hover:rounded-[3px] hover:bg-sky-300 hover:text-white"}`
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
