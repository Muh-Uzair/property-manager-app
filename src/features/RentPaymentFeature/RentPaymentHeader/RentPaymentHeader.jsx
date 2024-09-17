import Heading from "../../../ui/Heading";
import PropertyChangeBtns from "../../../ui/PropertyChangeBtns";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { useState } from "react";

const stylesSearchFilter =
  "bg-brand-color-300/40 border border-brand-color-400 rounded-full pl-[10px] uppercase h-[25px] text-[13px] font-semibold text-brand-color-700 focus:outline-none focus:ring-[1px] focus:border-none focus:ring-brand-color-700";

// COMPONENT START
export default function RentPaymentHeader() {
  // VARIABLES
  const propertyType = useGetPropertyType();
  const [inputSearch, setInputSearch] = useState(
    propertyType?.slice(0, -1) ?? "flat",
  );

  // FUNCTION
  function updateInputSearch(e) {
    console.log(e.target.value);
    setInputSearch(e.target.value);
  }

  // JSX
  return (
    <header className="">
      <div className="flex h-[55px] items-center justify-between border-y-[2px] border-brand-color-400 bg-brand-color-200/30 px-[8px] py-[5px]">
        <div className="largeScreen:block">
          <Heading type="primary">
            Rent Payment :{" "}
            {`${propertyType.at(0).toUpperCase()}${propertyType.slice(1, -1)}`}
          </Heading>
        </div>

        {/* search functionality */}
        <div className="relative flex items-center largeScreen:col-start-3">
          <input
            type="text"
            className={`${stylesSearchFilter} placeholder:text-brand-color-500/50 smallTab:w-[220px]`}
            placeholder="Search Property"
            name={"propertySearchInput"}
            value={inputSearch}
            onChange={(e) => updateInputSearch(e)}
            maxLength={8}
          />
          <span className="absolute right-[8px] text-brand-color-700 active:text-brand-color-400">
            <IoSearch />
          </span>
        </div>

        {/* filter functionality */}
        <div className="col-start-3 largeScreen:col-start-4">
          <select
            name={"propertyFilterOptions"}
            className={`${stylesSearchFilter} smallTab:w-[100px]`}
          >
            <option name={"propertyFilterOp1"}>option1</option>
            <option name={"propertyFilterOp2"}>option1</option>
            <option name={"propertyFilterOp3"}>option1</option>
          </select>
        </div>
      </div>

      {/* Filter functionality for large screen */}
      <div className="mt-[10px] hidden items-center justify-end largeScreen:flex">
        <PropertyChangeBtns
          btnsUrlArr={[
            { label: "flats", url: "rentPayment/flats" },
            { label: "rooms", url: "rentPayment/rooms" },
            { label: "shops", url: "rentPayment/shops" },
          ]}
        />
      </div>
    </header>
  );
  // JSX
}
// COMPONENT END
