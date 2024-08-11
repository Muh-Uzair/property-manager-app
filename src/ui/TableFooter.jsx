import PropTypes from "prop-types";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { calculateTotalPages } from "../utils/helpers";
import PaginationButton from "../ui/PaginationButton";

const paginationIconSize = "15px";

// COMPONENT START
export default function TableFooter({ totalProperty }) {
  // VARIABLES
  const [searchParams, setSearchParams] = useSearchParams();
  const currPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  // FUNCTIONS

  // JSX
  return (
    <footer className="flex h-[30px] items-center justify-between gap-[10px] rounded-b-[8px] border-[1px] border-gray-200 bg-gray-100 px-[20px]">
      <div className="flex items-center justify-center">
        <span className="text-[11px] font-semibold text-gray-600">
          YOU ARE CURRENTLY ON PAGE <b>{currPage}</b> OUT OF{" "}
          {calculateTotalPages(totalProperty)}
        </span>
      </div>

      <div className="flex gap-[20px]">
        <PaginationButton
          label={"PREV"}
          icon={<HiChevronLeft size={paginationIconSize} />}
          type={"prev"}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          currPage={currPage}
          totalProperty={totalProperty}
        />
        <PaginationButton
          label={"NEXT"}
          icon={<HiChevronRight size={paginationIconSize} />}
          type={"next"}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          currPage={currPage}
          totalProperty={totalProperty}
        />
      </div>
    </footer>
  );
  // JSX
}
// COMPONENT END

// PropTypes
TableFooter.propTypes = {
  totalProperty: PropTypes.number.isRequired,
};
