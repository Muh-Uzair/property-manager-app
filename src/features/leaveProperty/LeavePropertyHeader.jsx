import Heading from "../../ui/Heading";
import PropertyChangeBtns from "../../ui/PropertyChangeBtns";

// COMPONENT START
export default function LeavePropertyHeader() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="flex items-center justify-between">
      <Heading type="primary">Leave property</Heading>
      <PropertyChangeBtns
        btnsUrlArr={[
          { label: "flats", url: "leaveProperty/flats" },
          { label: "rooms", url: "leaveProperty/rooms" },
          { label: "shops", url: "leaveProperty/shops" },
        ]}
      />
    </div>
  );
  // JSX
}
// COMPONENT END
