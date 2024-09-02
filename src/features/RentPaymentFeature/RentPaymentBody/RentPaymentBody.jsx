import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useGetAllOccupiedProperty } from "./useGetAllOccupiedProperty";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import { useState } from "react";

// COMPONENT START
export default function RentPaymentBody() {
  // VARIABLES
  const { dataOccupiedProperty = {}, statusOccupiedProperty } =
    useGetAllOccupiedProperty();

  console.log(window);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // FUNCTIONS

  // JSX
  if (statusOccupiedProperty === "pending") {
    return (
      <div className="flex h-full w-[100%] items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (
    statusOccupiedProperty === "success" &&
    Object.entries(dataOccupiedProperty).length > 0
  ) {
    return (
      <main className="overflow-y-scroll bg-green-400 pb-[10px] pr-[10px] pt-[10px] smallTab:h-[760px] largeTab:h-[1000px] largeScreen:h-[750px]">
        <ul>
          {dataOccupiedProperty.map((val, i) => (
            <li key={i} className="mb-[3px] border border-brand-color-500">
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
                  <br></br>
                  <span>
                    {val.flat_number ?? val.room_number ?? val.shop_number}
                  </span>
                  <br></br>
                  <span>
                    {val.flat_number ?? val.room_number ?? val.shop_number}
                  </span>
                  <br></br>
                  <span>
                    {val.flat_number ?? val.room_number ?? val.shop_number}
                  </span>
                  <br></br>
                  <span>
                    {val.flat_number ?? val.room_number ?? val.shop_number}
                  </span>
                  <br></br>
                  <span>
                    {val.flat_number ?? val.room_number ?? val.shop_number}
                  </span>
                  <br></br>
                  <span>
                    {val.flat_number ?? val.room_number ?? val.shop_number}
                  </span>
                  <br></br>
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
// COMPONENT END

// // COMPONENT START
// export default function RentPaymentBody() {
//   // VARIABLES
//   const { dataOccupiedProperty = {}, statusOccupiedProperty } =
//     useGetAllOccupiedProperty();

//   // FUNCTIONS

//   // JSX
//   if (statusOccupiedProperty === "pending") {
//     return (
//       <div className="flex h-full w-[100%] items-center justify-center">
//         <LoadingSpinner />
//       </div>
//     );
//   }
//   if (
//     statusOccupiedProperty === "success" &&
//     Object.entries(dataOccupiedProperty).length > 0
//   ) {
//     return (
//       <main className="h-[100%] overflow-y-auto bg-green-400 pb-[10px] pr-[10px] pt-[10px]">
//         <ul>
//           {dataOccupiedProperty.map((val, i) => (
//             <li key={i}>
//               {val.flat_number ?? val.room_number ?? val.shop_number}
//             </li>
//           ))}
//         </ul>
//       </main>
//     );
//   }

//   // JSX
// }
// // COMPONENT END
