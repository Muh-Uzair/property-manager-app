import PropTypes from "prop-types";

import TableListRow from "./TableListRow";
import AccordionHeaderItem from "../../../ui/AccordionHeaderItem";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";

// COMPONENT START
export default function RentPayAccordionHeader({ occupiedProperty }) {
  // VARIABLES
  const propertyType = useGetPropertyType();

  // FUNCTIONS

  // JSX
  return (
    <TableListRow colSizes={"1fr 1fr 1fr "}>
      <AccordionHeaderItem
        type="labelValuePair"
        itemLabel={propertyType.slice(0, -1)}
        itemValue={
          occupiedProperty.flat_number ??
          occupiedProperty.shop_number ??
          occupiedProperty.room_number
        }
      />
      <AccordionHeaderItem
        type="labelValuePair"
        itemLabel={`rent `}
        itemValue={occupiedProperty.rent}
      />
      <AccordionHeaderItem
        type="labelValuePair"
        itemLabel={`floor `}
        itemValue={occupiedProperty.floor}
      />
    </TableListRow>
  );
  // JSX
}

RentPayAccordionHeader.propTypes = {
  dataTenantNamesArr: PropTypes.array,
  occupiedProperty: PropTypes.object,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

// COMPONENT END
