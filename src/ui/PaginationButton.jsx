import PropTypes from "prop-types";
import { calculateTotalPages } from "../utils/helpers";

export default function PaginationButton({
  label,
  icon,
  type,
  searchParams,
  setSearchParams,
  currPage,
  totalProperty,
}) {
  // FUNCTIONS

  // FUNCTION
  const btnNextClicked = () => {
    if (currPage === calculateTotalPages(totalProperty)) return;
    const nextPageNum = currPage + 1;
    searchParams.set("page", nextPageNum);
    setSearchParams(searchParams);
  };

  // FUNCTION
  const btnPrevClicked = () => {
    if (currPage === 1) return;
    searchParams.set("page", currPage - 1);
    setSearchParams(searchParams);
  };

  if (calculateTotalPages(totalProperty) <= 1) return null;
  return (
    <button
      onClick={
        type === "next" ? () => btnNextClicked() : () => btnPrevClicked()
      }
      className="flex items-center justify-center text-[10px] font-semibold text-gray-400 active:text-brand-color-500 largeScreen:hover:text-brand-color-600 largeScreen:active:text-brand-color-500"
    >
      {type === "prev" && icon}
      {label}
      {type === "next" && icon}
    </button>
  );
}

// PropTypes
PaginationButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  type: PropTypes.string,
  searchParams: PropTypes.object,
  setSearchParams: PropTypes.func,
  currPage: PropTypes.number,
  totalProperty: PropTypes.number,
};
