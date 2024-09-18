import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// COMPONENT START
export default function TableOptionsMenu({ menuOptionsBtns }) {
  // VARIABLES
  const navigate = useNavigate();

  // FUNCTIONS

  // FUNCTION
  const changeUrl = (url) => {
    navigate(url);
  };

  // JSX
  return (
    <div className="absolute bottom-[-60px] right-[20px] z-[100] flex flex-col rounded-[5px] border-[1px] bg-white">
      {menuOptionsBtns.map((val, i) => (
        <button
          className="flex h-[30px] min-w-[100px] items-center justify-start gap-[10px] px-[10px] hover:bg-sky-100 hover:text-brand-color-500 active:bg-sky-200"
          key={i}
          onClick={() => changeUrl(val.url)}
        >
          <span>{val.icon}</span> <span>{val.label}</span>
        </button>
      ))}
    </div>
  );
}

TableOptionsMenu.propTypes = {
  menuOptionsBtns: PropTypes.array,
};
