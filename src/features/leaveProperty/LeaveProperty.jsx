import Heading from "../../ui/Heading";
import PropertyChangeBtns from "../../ui/PropertyChangeBtns";

// COMPONENT START
export default function LeaveProperty() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div>
      {/* DIVIDER  page header*/}
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

      {/* DIVIDER  page body*/}
      <div></div>
    </div>
  );
  // JSX
}
// COMPONENT END
