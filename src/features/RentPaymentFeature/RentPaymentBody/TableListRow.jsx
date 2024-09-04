import PropTypes from "prop-types";
import TableRowItem from "../../../ui/TableRowItem";

// COMPONENT API

// COMPONENT START
export default function TableListRow({
  itemLabelArr,
  itemTypeArr,
  dataArr,
  totalColsArr,
}) {
  // VARIABLES
  console.log(dataArr);

  // FUNCTIONS

  // JSX
  return (
    <div className={`grid grid-cols-[${totalColsArr}] text-[11px] uppercase`}>
      {dataArr.map((val, i) => (
        <>
          {itemTypeArr[i] === "labelValuePair" && (
            <TableRowItem key={i}>
              <span>{`${itemLabelArr[i]} | `}</span>
            </TableRowItem>
          )}
        </>
      ))}
    </div>
  );
  // JSX
}

TableListRow.propTypes = {
  dataArr: PropTypes.array,
  itemTypeArr: PropTypes.array,
  itemLabelArr: PropTypes.array,
  totalColsArr: PropTypes.string,
};
// COMPONENT END

// // COMPONENT START
// export default function TableListRow({ propertyDetails, tenantName }) {
//   // VARIABLES

//   let { propertyType = "flats" } = useParams();

//   // FUNCTIONS

//   // JSX
//   return (
//     <div className="flex gap-[15px] text-nowrap text-[11px] uppercase">
//       {/* propertyNumber */}
//       <div>
//         <span>{`${propertyType?.at(0).toUpperCase()}${propertyType.slice(1, -1)} : `}</span>
//         <span>
//           {propertyDetails.flat_number ??
//             propertyDetails.room_number ??
//             propertyDetails.shop_number}
//         </span>
//       </div>

//       {/* tenant */}
//       <div>
//         <span>{`tenant : `}</span>
//         <span>{tenantName}</span>
//       </div>

//       {/* rent */}
//       <div>
//         <span>{`rent : `}</span>
//         <span>{propertyDetails.rent}</span>
//       </div>

//       {/*  floor*/}
//       <div>
//         <span>{`floor : `}</span>
//         <span>{propertyDetails.floor}</span>
//       </div>
//     </div>
//   );
//   // JSX
// }

// TableListRow.propTypes = {
//   propertyDetails: PropTypes.object,
//   tenantName: PropTypes.string,
// };
// // COMPONENT END
