import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useGetAllOccupiedProperty } from "./useGetAllOccupiedProperty";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import { useEffect, useState } from "react";

// COMPONENT START
export default function RentPaymentBody() {
  // VARIABLES
  const { dataOccupiedProperty = {}, statusOccupiedProperty } =
    useGetAllOccupiedProperty();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [expanded, setExpanded] = useState(false);

  const [screenHeight, setScreenHeight] = useState(window.innerHeight); // Now screenHeight is a number
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // FUNCTION // to set the screen width every time the the screen width changes
  useEffect(() => {
    window.addEventListener("resize", () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
    });
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
  if (
    statusOccupiedProperty === "success" &&
    Object.entries(dataOccupiedProperty).length > 0
  ) {
    return (
      <main
        style={{
          height: `calc(${screenHeight}px - 200px)`, // Inline style with dynamic calculation
        }}
        className="overflow-y-scroll bg-green-400 pb-2.5 pr-2.5 pt-2.5"
      >
        <ul>
          {dataOccupiedProperty.map((val, i) => (
            <li key={i} className="mb-0.75 border border-brand-color-500">
              <Accordion
                expanded={expanded === val.id}
                onChange={handleChange(val.id)}
              >
                <AccordionSummary
                  expandIcon={<span>v</span>}
                  aria-controls="panel1bh-content"
                  id={val.id}
                >
                  <div className="flex flex-col">
                    <span>a</span>
                    <span>a</span>
                    <span>a</span>
                    <span>
                      {val.flat_number ?? val.room_number ?? val.shop_number}
                    </span>
                  </div>
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
