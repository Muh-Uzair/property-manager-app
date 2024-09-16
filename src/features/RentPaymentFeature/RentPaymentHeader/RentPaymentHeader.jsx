import { IoSearch } from "react-icons/io5";

import Heading from "../../../ui/Heading";
import PropertyChangeBtns from "../../../ui/PropertyChangeBtns";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const stylesSearchFilter =
  "bg-brand-color-300/40 border border-brand-color-400 rounded-full pl-[10px] uppercase h-[25px] text-[13px] font-semibold text-brand-color-700 focus:outline-none focus:ring-[1px] focus:border-none focus:ring-brand-color-700";

// COMPONENT START
export default function RentPaymentHeader() {
  // VARIABLES
  const propertyType = useGetPropertyType();
  const [searchPropertyValue, setSearchPropertyValue] = useState(
    `${propertyType.slice(0, -1)} `,
  );
  const queryClient = useQueryClient();

  // FUNCTION updates value on every page update
  useEffect(() => {
    setSearchPropertyValue(`${propertyType.slice(0, -1)} `);
  }, [propertyType]);

  // FUNCTION
  function handlePropertySearch(e) {
    e.preventDefault();
    const occupiedProperty = queryClient.getQueryData([
      "occupiedProperty",
      `${propertyType}`,
    ]);

    const searchedOccupiedProperty =
      occupiedProperty.find((val) => {
        if (propertyType === "flats")
          return val.flat_number === searchPropertyValue.slice(5);
        if (propertyType === "rooms")
          return val.room_number === searchPropertyValue.slice(5);
        if (propertyType === "shops")
          return val.shop_number === searchPropertyValue.slice(5).toUpperCase();
      }) || null;

    console.log(searchedOccupiedProperty);
  }

  // JSX
  return (
    <header className="">
      {/* heading for phone smallTab largeTab */}
      <div className="mb-[10px] flex items-center justify-between largeScreen:hidden">
        <Heading type="primary">
          Rent Payment :{" "}
          {propertyType
            ? `${propertyType?.at(0).toUpperCase()}${propertyType?.slice(1)}`
            : "Flats"}
        </Heading>
        <PropertyChangeBtns
          btnsUrlArr={[
            { label: "flats", url: "rentPayment/flats" },
            { label: "rooms", url: "rentPayment/rooms" },
            { label: "shops", url: "rentPayment/shops" },
          ]}
        />
      </div>

      {/* input and filter */}
      <div className="grid h-[45px] grid-cols-[auto_1fr_auto] items-center border-y-[2px] border-brand-color-400 bg-brand-color-200/30 px-[8px] largeScreen:h-[60px] largeScreen:grid-cols-[auto_1fr_auto_auto] largeScreen:gap-[20px]">
        {/* heading for large screens */}
        <div className="hidden largeScreen:block">
          <Heading type="primary">Rent Payment : Flat</Heading>
        </div>

        {/* search functionality */}
        <form
          className="relative flex items-center largeScreen:col-start-3"
          onSubmit={(e) => handlePropertySearch(e)}
        >
          <input
            type="text"
            className={`${stylesSearchFilter} placeholder:text-brand-color-500/50 smallTab:w-[220px]`}
            placeholder="Search Property"
            name={"propertySearchInput"}
            value={searchPropertyValue}
            onChange={(e) => setSearchPropertyValue(e.target.value)}
            maxLength={8}
          />
          <button
            type="submit"
            className="absolute right-[8px] text-brand-color-700 active:text-brand-color-400"
          >
            <IoSearch />
          </button>
        </form>

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
