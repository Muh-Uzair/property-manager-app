import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

import LoadingSpinner from "../../../ui/LoadingSpinner";
import RentPayAccordionHeader from "./RentPayAccordionHeader";

import { useGetAllOccupiedProperty } from "./useGetAllOccupiedProperty";
import { brandColor500 } from "../../../styles/globalStyles";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import RentPayAccordionBody from "./RentPayAccordionBody";
import { useGetScreenHeight } from "./useGetScreenHeight";

// COMPONENT START
export default function RentPaymentBody() {
  // VARIABLES
  const [expanded, setExpanded] = useState(false);

  const screenHeight = useGetScreenHeight();
  const { dataOccupiedProperty = [], statusOccupiedProperty } =
    useGetAllOccupiedProperty();

  // FUNCTIONS

  // FUNCTION // function that controls the accordions
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
