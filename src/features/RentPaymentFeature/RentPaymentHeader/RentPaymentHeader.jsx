import Heading from "../../../ui/Heading";

const commonStylesSearchFilter =
  "px-[10px] py-[3px] rounded-[5px] border-brand-color-400/60 font-semibold text-brand-color-500  border focus:outline-none focus:ring-[1px] focus:ring-brand-color-400";

// COMPONENT START
export default function RentPaymentHeader() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <header className="grid grid-cols-[auto_1fr_300px_120px] items-center gap-[20px] border-y-[3px] border-brand-color-400/60 px-[20px]">
      <Heading type="primary">Rent Payment : Flat</Heading>

      <input
        className={`col-start-3 ${commonStylesSearchFilter} bg-brand-color-300/20 placeholder-brand-color-500/50`}
        placeholder="Search Property"
      />
      <select className={`${commonStylesSearchFilter} bg-brand-color-300/50`}>
        <option>option 1</option>
        <option>option 2</option>
        <option>option 3</option>
      </select>
    </header>
  );
  // JSX
}
// COMPONENT END
