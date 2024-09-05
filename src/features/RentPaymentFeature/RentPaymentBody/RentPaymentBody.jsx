import Accordion from "@mui/material/Accordion";
import { useEffect, useState } from "react";

import LoadingSpinner from "../../../ui/LoadingSpinner";
import RentPayAccordionHeader from "./RentPayAccordionHeader";
import RentPayAccordionBody from "./RentPayAccordionBody";

import { useGetAllOccupiedProperty } from "./useGetAllOccupiedProperty";
import { AccordionDetails } from "@mui/material";

// COMPONENT START
export default function RentPaymentBody() {
  // VARIABLES
  const {
    dataOccupiedProperty = [],
    dataTenantNamesArr = [],
    statusTenantNamesArr,
  } = useGetAllOccupiedProperty();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [expanded, setExpanded] = useState(false);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
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

  if (statusTenantNamesArr === "pending" || dataTenantNamesArr.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (dataTenantNamesArr.length > 0 && statusTenantNamesArr === "success") {
    return (
      <main
        style={{
          height: `calc(${screenHeight}px - 200px)`, // Inline style with dynamic calculation
        }}
        className="overflow-y-auto pb-2.5 pr-2.5 pt-2.5"
      >
        <ul className="flex flex-col gap-[10px]">
          {dataOccupiedProperty.map((occupiedProperty, i) => (
            <li
              key={i}
              className="rounded-[5px] border border-brand-color-100/20 text-[11px] uppercase"
            >
              <Accordion
                expanded={expanded === occupiedProperty.id}
                onChange={handleChange(occupiedProperty.id)}
              >
                {/* Accordion Header */}

                <RentPayAccordionHeader
                  dataTenantNamesArr={dataTenantNamesArr}
                  occupiedProperty={occupiedProperty}
                  index={i}
                />
                {/* Accordion Body */}
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
