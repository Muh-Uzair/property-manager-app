import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

import LoadingSpinner from "../../../ui/LoadingSpinner";
import RentPayAccordionHeader from "./RentPayAccordionHeader";

import { useGetAllOccupiedProperty } from "./useGetAllOccupiedProperty";
import { brandColor500 } from "../../../styles/globalStyles";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import RentPayAccordionBody from "./RentPayAccordionBody";

// COMPONENT START
export default function RentPaymentBody() {
  // VARIABLES
  const { dataOccupiedProperty = [], statusOccupiedProperty } =
    useGetAllOccupiedProperty();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [expanded, setExpanded] = useState(false);

  // FUNCTIONS

  // FUNCTION // function that controls the accordions
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

  if (statusOccupiedProperty === "pending") {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (dataOccupiedProperty.length > 0 && statusOccupiedProperty === "success") {
    return (
      <main
        style={{
          height: `calc(${screenHeight}px - 200px)`, // Inline style with dynamic calculation
        }}
        className="overflow-y-auto pb-2.5 pr-2.5 pt-2.5"
      >
        <ul className="flex flex-col gap-[10px]">
          {dataOccupiedProperty.map((occupiedProperty, i) => (
            <li className="uppercase" key={i}>
              <Accordion
                expanded={expanded === `panel${i}`}
                onChange={handleChange(`panel${i}`)}
              >
                <AccordionSummary
                  expandIcon={
                    <MdArrowDropDown size={"25px"} color={brandColor500} />
                  }
                  aria-controls={`panel${i}bh-content`}
                  id={`panel${i}bh-header`}
                >
                  <RentPayAccordionHeader occupiedProperty={occupiedProperty} />
                </AccordionSummary>
                <AccordionDetails>
                  <RentPayAccordionBody occupiedProperty={occupiedProperty} />
                </AccordionDetails>
              </Accordion>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

// <Accordion
// expanded={expanded === dataOccupiedProperty[0].id}
// onChange={handleChange(dataOccupiedProperty[0].id)}
// >
// <ul className="flex flex-col gap-[10px]">
//   {dataOccupiedProperty.map((occupiedProperty, i) => (
//     <li
//       key={i}
//       className="rounded-[5px] border border-brand-color-100/20 text-[11px] uppercase"
//     >
//       <AccordionSummary
//         expandIcon={
//           <MdArrowDropDown size={"25px"} color={brandColor500} />
//         }
//         aria-controls={`${occupiedProperty.id} content`}
//         id={occupiedProperty.id}
//       >
//         <RentPayAccordionHeader
//           dataTenantNamesArr={dataTenantNamesArr}
//           occupiedProperty={occupiedProperty}
//           index={i}
//         />
//       </AccordionSummary>
//       <AccordionDetails>
//         <RentPayAccordionBody occupiedProperty={occupiedProperty} />
//       </AccordionDetails>
//     </li>
//   ))}
// </ul>
// </Accordion>
