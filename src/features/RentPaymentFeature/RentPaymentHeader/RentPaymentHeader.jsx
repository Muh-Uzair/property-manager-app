import { IoSearch } from "react-icons/io5";

import Heading from "../../../ui/Heading";
import PropertyChangeBtns from "../../../ui/PropertyChangeBtns";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { useForm } from "react-hook-form";
import { useRentPaymentContext } from "../useRentPaymentContext";
import { useState } from "react";

const stylesSearchFilter =
  "bg-brand-color-300/40 border border-brand-color-400 rounded-full pl-[10px] uppercase h-[25px] text-[13px] font-semibold text-brand-color-700 focus:outline-none focus:ring-[1px] focus:border-none focus:ring-brand-color-700";

// COMPONENT START
export default function RentPaymentHeader() {
  // VARIABLES
  const propertyType = useGetPropertyType();
  const [valueSearchProperty, setValueSearchProperty] = useState(
    `${propertyType.slice(0, -1)} `,
  );
  const { register, handleSubmit } = useForm();
  const { setIsSearchingProperty } = useRentPaymentContext();

  // FUNCTION updates the valueSearchProperty as user types in it
  function updateValueSearchProperty(e) {
    setValueSearchProperty(e.target.value);
  }

  // FUNCTION
  function handleSubmitProperty(data) {
    console.log(data);
    setIsSearchingProperty(true);
  }
  // FUNCTION
  function handleSubmitPropertyError(errors) {
    console.log(errors);
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
          onSubmit={handleSubmit(
            handleSubmitProperty,
            handleSubmitPropertyError,
          )}
        >
          <input
            type="text"
            className={`${stylesSearchFilter} placeholder:text-brand-color-500/50 smallTab:w-[220px]`}
            placeholder="Search Property"
            name={"propertySearchInput"}
            maxLength={8}
            value={valueSearchProperty}
            {...register("propertySearchInput", { required: true })}
            onChange={(e) => updateValueSearchProperty(e)}
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
