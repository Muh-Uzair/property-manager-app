import { HiEllipsisVertical } from "react-icons/hi2";
import TableItemRenter from "../features/ShowPropertyDetails/TableItemRenter";
import TableRowItem from "./TableRowItem";
import PropTypes from "prop-types";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { GoPencil } from "react-icons/go";

// COMPONENT START
export default function TableRow({
  colSize,
  val,
  toggleOptionMenu,
  optionsMenuOpen,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div
      className="grid h-[50px] border-b-[1px] border-gray-100"
      style={{
        gridTemplateColumns: `${colSize.join(" ")}`,
      }}
    >
      {/* property image */}
      <TableRowItem>
        {/* <img className="h-[40px] rounded-[3px]" src={`${val.image}`} /> */}
        img
      </TableRowItem>

      {/* property number */}
      <TableRowItem>
        {val.flat_number || val.room_number || val.shop_number}
      </TableRowItem>

      {/* property status */}
      <TableRowItem>
        <span
          className={`flex items-center justify-center rounded-lg px-[7px] text-[10px] font-bold ${val.status !== "occupied" ? "bg-sky-100 text-sky-500" : "bg-blue-300 text-blue-700"}`}
        >
          {val.status.toUpperCase()}
        </span>
      </TableRowItem>

      {/* property floor number */}
      <TableRowItem>
        <div className="flex items-center justify-center">{val.floor}</div>
      </TableRowItem>

      {/* property rent */}
      <TableRowItem>
        <div className="flex items-center justify-center">{val.rent}</div>
      </TableRowItem>

      {/* tenant name */}
      <TableRowItem>
        {val?.renter_id ? (
          <TableItemRenter renter_id={val?.renter_id} />
        ) : (
          <span>{"-"}</span>
        )}
      </TableRowItem>

      <TableRowItem>
        <div className="relative">
          {val.status === "occupied" && (
            <HiEllipsisVertical
              size={"20px"}
              color="gray"
              className="cursor-pointer rounded-[5px] hover:bg-gray-50 active:bg-gray-100"
              onClick={() => toggleOptionMenu(val.id)}
            />
          )}

          {optionsMenuOpen.menuOpenStatus === true &&
            val.id === optionsMenuOpen.rowId && (
              <TableOptionsMenu
                menuOptionsBtns={[
                  {
                    icon: <TbListDetails />,
                    label: "Details",
                    url: `${val.id}`,
                  },
                  { icon: <GoPencil />, label: "Edit", url: "editProperty" },
                ]}
              />
            )}
        </div>
      </TableRowItem>
    </div>
  );
}

TableRow.propTypes = {
  colSize: PropTypes.arrayOf(PropTypes.string).isRequired,
  val: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    flat_number: PropTypes.string,
    room_number: PropTypes.string,
    shop_number: PropTypes.string,
    status: PropTypes.string.isRequired,
    floor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rent: PropTypes.number.isRequired,
    renter_id: PropTypes.number,
  }).isRequired,
  toggleOptionMenu: PropTypes.func,
  optionsMenuOpen: PropTypes.object,
};

// COMPONENT START
function TableOptionsMenu({ menuOptionsBtns }) {
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
