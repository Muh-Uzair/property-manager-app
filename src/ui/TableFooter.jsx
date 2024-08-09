import PropTypes from "prop-types";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

const paginationIconSize = "15px";

// COMPONENT START
export default function TableFooter() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <footer className="flex h-[30px] items-center justify-between gap-[10px] rounded-b-[8px] border-[1px] border-gray-200 bg-gray-100 px-[20px]">
      <div className="flex items-center justify-center">
        <span className="text-[11px] font-semibold text-gray-600">
          YOU ARE CURRENTLY ON PAGE 1 OUT OF 30
        </span>
      </div>
      <div className="flex gap-[20px]">
        <PaginationButton
          label={"PREV"}
          icon={<HiChevronLeft size={paginationIconSize} />}
          type={"prev"}
        />
        <PaginationButton
          label={"NEXT"}
          icon={<HiChevronRight size={paginationIconSize} />}
          type={"next"}
        />
      </div>
    </footer>
  );
  // JSX
}
// COMPONENT END

const PaginationButton = ({ label, icon, type }) => {
  return (
    <button className="flex items-center justify-center text-[11px] font-semibold text-gray-400 hover:text-brand-color-600">
      {type === "prev" && icon}
      {label}
      {type === "next" && icon}
    </button>
  );
};

// PropTypes
PaginationButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  type: PropTypes.string,
};
