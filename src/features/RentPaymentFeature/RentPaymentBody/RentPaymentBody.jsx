import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useParams } from "react-router-dom";

import LoadingSpinner from "../../../ui/LoadingSpinner";
import TableListRow from "./TableListRow";

import { useGetAllOccupiedProperty } from "./useGetAllOccupiedProperty";
import { brandColor500 } from "../../../styles/globalStyles";

function prepareArray(dataOccupiedProperty, statusTenantNamesArr) {
  let newArr = [];

  for (let i = 0; i < dataOccupiedProperty.length; i++) {
    let newInnerArr = [];

    newInnerArr.push(
      dataOccupiedProperty[i].flat_number ??
        dataOccupiedProperty[i].shop_number ??
        dataOccupiedProperty[i].room_number,
    );
    newInnerArr.push(statusTenantNamesArr[i]);
    newInnerArr.push(dataOccupiedProperty[i].rent);
    newInnerArr.push(dataOccupiedProperty[i].floor);

    newArr.push(newInnerArr);
  }

  return newArr;
}

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
        className="overflow-y-scroll pb-2.5 pr-2.5 pt-2.5"
      >
        <ul className="flex flex-col gap-[8px]">
          {dataOccupiedProperty.map((val, i) => (
            <li key={i} className="rounded-[5px]">
              <Accordion
                expanded={expanded === val.id}
                onChange={handleChange(val.id)}
              >
                <AccordionSummary
                  expandIcon={
                    <MdArrowDropDown size={"25px"} color={brandColor500} />
                  }
                  aria-controls="panel1bh-content"
                  id={val.id}
                >
                  <TableListRow
                    totalColsArr={"1fr_1fr_1fr_1fr"}
                    itemLabelArr={[
                      `${propertyType.slice(0, -1) ?? "flat"}`,
                      "tenant",
                      "rent",
                      "floor",
                    ]}
                    itemTypeArr={[
                      "labelValuePair",
                      "labelValuePair",
                      "labelValuePair",
                      "labelValuePair",
                    ]}
                    dataArr={prepareArray(
                      dataOccupiedProperty,
                      dataTenantNamesArr,
                    )}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <span>
                    {val.flat_number ?? val.room_number ?? val.shop_number}
                  </span>
                  {/* Other elements */}
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
