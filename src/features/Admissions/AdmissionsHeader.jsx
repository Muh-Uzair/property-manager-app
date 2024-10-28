import Heading from "../../ui/Heading";
import PropertyChangeBtns from "../../ui/PropertyChangeBtns";

// COMPONENT START
export default function AdmissionsHeader() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="flex items-center justify-between">
      <Heading type="primary">New admissions</Heading>
      <PropertyChangeBtns
        btnsUrlArr={[
          { label: "flats", url: "admissions/flats" },
          { label: "rooms", url: "admissions/rooms" },
          { label: "shops", url: "admissions/shops" },
        ]}
      />
    </div>
  );
  // JSX
}
// COMPONENT END
