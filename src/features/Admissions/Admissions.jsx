import AdmissionsBody from "./AdmissionsBody";
import AdmissionsHeader from "./AdmissionsHeader";

// COMPONENT START
export default function Admissions() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-[20px] largeScreen:px-[150px]">
      <AdmissionsHeader />
      <AdmissionsBody />
    </div>
  );
  // JSX
}
// COMPONENT END
