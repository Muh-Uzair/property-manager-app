import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import AccordionSummary from "@mui/material/AccordionSummary";
import { MdArrowDropDown } from "react-icons/md";

import TableListRow from "./TableListRow";
import TableRowItem from "../../../ui/TableRowItem";

import { brandColor500 } from "../../../styles/globalStyles";
// COMPONENT START
export default function RentPayAccordionHeader({
  dataTenantNamesArr,
  occupiedProperty,
  index,
}) {
  // VARIABLES
  const { propertyType = "flats" } = useParams();

  // FUNCTIONS

  // JSX
  return (
    <AccordionSummary
      expandIcon={<MdArrowDropDown size={"25px"} color={brandColor500} />}
      aria-controls={`${occupiedProperty.id} content`}
      id={occupiedProperty.id}
    >
      <TableListRow colSizes={"1fr 1fr 1fr 1fr"}>
        <TableRowItem
          type="labelValuePair"
          itemLabel={propertyType.slice(0, -1)}
          itemValue={
            occupiedProperty.flat_number ??
            occupiedProperty.shop_number ??
            occupiedProperty.room_number
          }
        />
        <TableRowItem
          type="labelValuePair"
          itemLabel={`rent `}
          itemValue={occupiedProperty.rent}
        />
        <TableRowItem
          type="labelValuePair"
          itemLabel={`floor `}
          itemValue={occupiedProperty.floor}
        />
        <TableRowItem
          type="labelValuePair"
          itemLabel={`tenant `}
          itemValue={dataTenantNamesArr[index]}
        />
      </TableListRow>
    </AccordionSummary>
  );
  // JSX
}

RentPayAccordionHeader.propTypes = {
  dataTenantNamesArr: PropTypes.array,
  occupiedProperty: PropTypes.object,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

// COMPONENT END
