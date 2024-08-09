import PropTypes from "prop-types";
import { HiEllipsisVertical } from "react-icons/hi2";
import TableRowItem from "./TableRowItem";

// COMPONENT START
export default function TableBody({ dataProperty, colSize }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="border-x-[1px] border-gray-200 text-[12px] font-semibold text-gray-400">
      {dataProperty?.map((val) => (
        // Table Row
        <div
          className="grid h-[50px] border-b-[1px] border-gray-100"
          key={val.id}
          style={{
            gridTemplateColumns: `${colSize.join(" ")}`,
          }}
        >
          <TableRowItem>
            <img className="h-[40px] rounded-[3px]" src={`${val.image}`} />
          </TableRowItem>

          <TableRowItem>
            {val.flat_number || val.room_number || val.shop_number}
          </TableRowItem>

          <TableRowItem>
            <span
              className={`rounded-lg px-[7px] ${val.status !== "occupied" ? "bg-sky-100 text-sky-500" : "bg-blue-300 text-blue-700"}`}
            >
              {val.status}
            </span>
          </TableRowItem>

          <TableRowItem>
            <div className="flex items-center justify-center">{val.floor}</div>
          </TableRowItem>

          <TableRowItem>
            <div className="flex items-center justify-center">{val.rent}</div>
          </TableRowItem>

          <TableRowItem>{val.renter_id ? val.renter_id : "-"}</TableRowItem>

          <TableRowItem>
            <HiEllipsisVertical
              size={"30px"}
              color="gray"
              className="cursor-pointer rounded-full p-[5px] hover:bg-gray-50 active:bg-gray-100"
            />
          </TableRowItem>
        </div>
      ))}
    </div>
  );
  // JSX
}
// COMPONENT END

TableBody.propTypes = {
  dataProperty: PropTypes.array.isRequired,
  colSize: PropTypes.array.isRequired,
};
