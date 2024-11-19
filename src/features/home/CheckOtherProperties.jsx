import Button from "@/ui/Button";
import { Link } from "react-router-dom";

// COMPONENT START
export default function CheckOtherProperties() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <section>
      <Button
        wide={true}
        paddingX={"15px"}
        size={"large"}
        type="primary"
        uppercase={true}
        paddingY="10px"
      >
        <Link to="/propertyDetails/flats">Check other properties</Link>
      </Button>
    </section>
  );
  // JSX
}
// COMPONENT END
