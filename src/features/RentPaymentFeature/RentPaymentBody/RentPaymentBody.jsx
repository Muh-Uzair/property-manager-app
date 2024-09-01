import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import { useGetAllOccupiedProperty } from "./useGetAllOccupiedProperty";
import LoadingSpinner from "../../../ui/LoadingSpinner";

// COMPONENT START
export default function RentPaymentBody() {
  // VARIABLES
  const { dataOccupiedProperty = {}, statusOccupiedProperty } =
    useGetAllOccupiedProperty();

  console.log(statusOccupiedProperty);
  console.log(dataOccupiedProperty);

  // FUNCTIONS

  // JSX
  if (statusOccupiedProperty === "pending") {
    return (
      <div className="flex h-full w-[100%] items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (statusOccupiedProperty === "success") {
    return (
      <main>
        <Accordion>
          <AccordionSummary
            expandIcon={<span>v</span>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<span>v</span>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<span>v</span>}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </main>
    );
  }

  // JSX
}
// COMPONENT END
