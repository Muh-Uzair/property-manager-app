import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useParams } from "react-router-dom";

import LoadingSpinner from "../../../ui/LoadingSpinner";
// import TableListRow from "./TableListRow";

import { useGetAllOccupiedProperty } from "./useGetAllOccupiedProperty";
import { brandColor500 } from "../../../styles/globalStyles";
import TableListRow from "./TableListRow";
import TableRowItem from "../../../ui/TableRowItem";
import Heading from "../../../ui/Heading";

// COMPONENT START
export default function RentPaymentBody() {
  // VARIABLES
  const {
    dataOccupiedProperty = [],
    statusOccupiedProperty,
    dataTenantNamesArr = [],
    statusTenantNamesArr,
  } = useGetAllOccupiedProperty();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { propertyType = "flats" } = useParams();

  const [expanded, setExpanded] = useState(false);

  const [screenHeight, setScreenHeight] = useState(window.innerHeight); // Now screenHeight is a number
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // FUNCTIONS

  // FUNCTION // to set the screen width every time the the screen width changes
  useEffect(() => {
    // actual function that updates the screen width
    function updateScreenWidth() {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
      setScreenHeight(window.innerHeight);
    }

    // event listening for the screen width
    window.addEventListener("resize", updateScreenWidth);
  }, [screenWidth]);

  // FUNCTION // screen width updates , update the screen height as well ;
  useEffect(() => {
    function updateScreenHeight() {
      setScreenHeight(window.innerHeight);
    }
    if (screenHeight !== window.innerHeight) {
      updateScreenHeight();
    } else {
      return;
    }
  }, [screenWidth, screenHeight]);

  // JSX
  if (
    statusOccupiedProperty === "pending" ||
    statusTenantNamesArr === "pending"
  ) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (
    statusOccupiedProperty === "success" &&
    dataOccupiedProperty.length > 0 &&
    statusTenantNamesArr === "success" &&
    dataTenantNamesArr.length > 0
  ) {
    return (
      <main
        style={{
          height: `calc(${screenHeight}px - 200px)`, // Inline style with dynamic calculation
        }}
        className="overflow-y-auto pb-2.5 pr-2.5 pt-2.5"
      >
        <ul className="flex flex-col gap-[8px]">
          {dataOccupiedProperty.map((val, i) => (
            <li key={i} className="rounded-[5px] text-[11px] uppercase">
              <Accordion
                expanded={expanded === val.id}
                onChange={handleChange(val.id)}
              >
                {/* Accordion Header */}
                <AccordionSummary
                  expandIcon={
                    <MdArrowDropDown size={"25px"} color={brandColor500} />
                  }
                  aria-controls={`${val.id} content`}
                  id={val.id}
                >
                  <TableListRow colSizes={"60px 70px 90px 1fr"}>
                    <TableRowItem>
                      <Heading type="medium">{`${propertyType.slice(0, -1)}`}</Heading>
                      <span>
                        {val.flat_number ?? val.shop_number ?? val.room_number}
                      </span>
                    </TableRowItem>
                    <TableRowItem>
                      <Heading type="medium">{`rent `}</Heading>
                      <span>{val.rent}</span>
                    </TableRowItem>
                    <TableRowItem>
                      <Heading type="medium">{`floor `}</Heading>
                      <span>{val.floor}</span>
                    </TableRowItem>
                    <TableRowItem>
                      <Heading type="medium">{`tenant `}</Heading>
                      <span>{dataTenantNamesArr[i]}</span>
                    </TableRowItem>
                  </TableListRow>
                </AccordionSummary>
                {/* Accordion Body */}
                <AccordionDetails>
                  <span>Accordion Body</span>
                </AccordionDetails>
              </Accordion>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  // JSX
}
