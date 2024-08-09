import PropTypes from "prop-types";
import { HiEllipsisVertical } from "react-icons/hi2";

// COMPONENT START
export default function TableBody({ dataFlats, colSize }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="border-x-[1px] border-gray-200 text-[12px] font-semibold text-gray-400">
      {dataFlats.map((val) => (
        <div
          className="grid h-[50px] border-b-[1px] border-gray-100"
          key={val.id}
          style={{
            gridTemplateColumns: `${colSize.join(" ")}`,
          }}
        >
          <TableRow>
            <img className="h-[40px] rounded-[3px]" src={`${val.image}`} />
          </TableRow>

          <TableRow>{val.flat_number}</TableRow>

          <TableRow>
            <span
              className={`rounded-lg px-[7px] ${val.status === "occupied" ? "bg-green-200 text-green-600" : "bg-red-200 text-red-500"}`}
            >
              {val.status}
            </span>
          </TableRow>

          <TableRow>
            <div className="flex items-center justify-center">{val.floor}</div>
          </TableRow>

          <TableRow>
            <div className="flex items-center justify-center">{val.rent}</div>
          </TableRow>

          <TableRow>{val.renter_id ? val.renter_id : "-"}</TableRow>

          <TableRow>
            <HiEllipsisVertical
              size={"30px"}
              color="gray"
              className="cursor-pointer rounded-full p-[5px] hover:bg-gray-50 active:bg-gray-100"
            />
          </TableRow>
        </div>
      ))}
    </div>
  );
  // JSX
}
// COMPONENT END

TableBody.propTypes = {
  dataFlats: PropTypes.array.isRequired,
  colSize: PropTypes.array.isRequired,
};

const TableRow = ({ children }) => {
  return <div className="flex items-center justify-center">{children}</div>;
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};
