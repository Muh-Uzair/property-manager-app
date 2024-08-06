import { NameLogo } from "./NameLogo";

// COMPONENT START///////////////////////////////////////////////
export function Header() {
  // STATE & VARIABLES
  // FUNCTIONS
  // JSX//////////////////////////////////////////
  return (
    <header className="flex justify-between border-b-[1px] border-sky-200 bg-gray-100">
      <NameLogo />

      <div className="bg-red-300">user+other</div>
    </header>
  );
  // JSX//////////////////////////////////////////
}
