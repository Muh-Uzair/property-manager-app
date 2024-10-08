import Heading from "../../../ui/Heading";
import PropertyChangeBtns from "../../../ui/PropertyChangeBtns";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";

// COMPONENT START
export default function RentPaymentHeader() {
  // VARIABLES
  const propertyType = useGetPropertyType();

  // JSX
  return (
    <header className="">
      <div className="flex h-[55px] items-center justify-between border-y-[2px] border-brand-color-400 bg-brand-color-200/30 px-[8px] py-[5px]">
        <div className="largeScreen:block">
          <Heading type="primary">
            Pay Rent:{" "}
            {`${propertyType.at(0).toUpperCase()}${propertyType.slice(1, -1)}s`}
          </Heading>
        </div>

        <div className="items-center justify-end largeScreen:flex">
          <PropertyChangeBtns
            btnsUrlArr={[
              { label: "flats", url: "rentPayment/flats" },
              { label: "rooms", url: "rentPayment/rooms" },
              { label: "shops", url: "rentPayment/shops" },
            ]}
          />
        </div>
      </div>
    </header>
  );
  // JSX
}
// COMPONENT END
