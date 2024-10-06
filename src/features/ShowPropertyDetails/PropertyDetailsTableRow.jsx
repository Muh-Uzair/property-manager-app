import { HiArrowRightOnRectangle, HiEllipsisVertical } from "react-icons/hi2";
import TableItemRenter from "./TableItemRenter";
import TableRowItem from "../../ui/TableRowItem";
import PropTypes from "prop-types";
import { TbListDetails } from "react-icons/tb";
import { GoPencil } from "react-icons/go";
import TableOptionsMenu from "../../ui/TableOptionsMenu";

// COMPONENT START
export default function PropertyDetailsTableRow({
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
      className="grid h-[40px] border-b-[1px] border-gray-100"
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
        {val?.flat_number || val?.room_number || val?.shop_number}
      </TableRowItem>

      {/* property status */}
      <TableRowItem>
        <span
          className={`flex items-center justify-center rounded-lg px-[7px] text-[7px] font-bold ${val?.status !== "occupied" ? "bg-sky-100 text-sky-500" : "bg-blue-300 text-blue-700"}`}
        >
          {val?.status?.toUpperCase()}
        </span>
      </TableRowItem>

      {/* property floor number */}
      <TableRowItem>
        <div className="flex items-center justify-center">{val?.floor}</div>
      </TableRowItem>

      {/* property rent */}
      <TableRowItem>
        <div className="flex items-center justify-center">{val?.rent}</div>
      </TableRowItem>

      {/* tenant name */}
      <TableRowItem>
        {val?.renter_id ? (
          <TableItemRenter renter_id={val?.renter_id} />
        ) : (
          <span>{"-"}</span>
        )}
      </TableRowItem>

      {/* options menu */}
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
                  { icon: <GoPencil />, label: "Edit", url: `edit/${val.id}` },
                  {
                    icon: <HiArrowRightOnRectangle />,
                    label: "Un-occupy",
                  },
                ]}
              />
            )}
        </div>
      </TableRowItem>
    </div>
  );
}

PropertyDetailsTableRow.propTypes = {
  colSize: PropTypes.arrayOf(PropTypes.string),
  val: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    flat_number: PropTypes.string,
    room_number: PropTypes.string,
    shop_number: PropTypes.string,
    status: PropTypes.string,
    floor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rent: PropTypes.number,
    renter_id: PropTypes.number,
  }),
  toggleOptionMenu: PropTypes.func,
  optionsMenuOpen: PropTypes.object,
};
