import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { createContext } from "react";

import RentDetails from "./rentDetails/RentDetails";
import PropertyDetails from "./singlePropertyDetails/PropertyDetails";
import TenantDetails from "./tenantDetails/TenantDetails";
import LoadingSpinner from "../../../ui/LoadingSpinner";

import { useGetSinglePropertyDetails } from "./useGetSinglePropertyDetails";
import { useGetScreenHeight } from "../../RentPaymentFeature/RentPaymentBody/useGetScreenHeight";

export const ContextSingleProperty = createContext();

// COMPONENT START
export default function SinglePropertyDetails() {
  // VARIABLES
  const navigate = useNavigate();
  const {
    dataSingleProperty,
    statusSingleProperty,
    dataTenantDetails,
    statusTenantDetails,
    dataOtherRentedPropertiesNames,
    statusOtherRentedPropertiesNames,
  } = useGetSinglePropertyDetails();
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX

  if (
    statusSingleProperty === "pending" ||
    statusTenantDetails === "pending" ||
    statusOtherRentedPropertiesNames === "pending"
  )
    return (
      <div className="flex h-[100%] items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  if (
    statusSingleProperty === "success" ||
    statusTenantDetails === "success" ||
    statusOtherRentedPropertiesNames === "success"
  ) {
    return (
      <ContextSingleProperty.Provider
        value={{
          dataSingleProperty,
          dataTenantDetails,
          dataOtherRentedPropertiesNames,
        }}
      >
        <div className="grid largeTab:grid-rows-[auto_1fr]">
          {/* back button */}
          <button
            className="hidden h-[22px] w-[40px] items-center justify-center rounded-[3px] bg-sky-400 text-white hover:bg-sky-400/80 largeTab:flex"
            onClick={() => navigate(-1)}
          >
            <HiOutlineArrowLongLeft size={"25px"} />
          </button>

          {/* all details */}
          <div
            style={{
              height: `calc(${screenHeight}px - 80px)`, // Inline style with dynamic calculation
            }}
            className="flex flex-col gap-[10px] overflow-y-scroll px-[5px]"
          >
            {/* portion :  property details */}
            <PropertyDetails />

            {/*Renter details portion*/}
            <TenantDetails />

            {/* Rent details portion */}
            <RentDetails />
          </div>
        </div>
      </ContextSingleProperty.Provider>
    );
  }

  // JSX
}
// COMPONENT END
