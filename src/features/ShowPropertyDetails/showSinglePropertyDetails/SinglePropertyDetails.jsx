import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { createContext } from "react";

import RentDetails from "./rentDetails/RentDetails";
import PropertyDetails from "./singlePropertyDetails/PropertyDetails";
import TenantDetails from "./tenantDetails/TenantDetails";
import LoadingSpinner from "../../../ui/LoadingSpinner";

import { useGetSinglePropertyDetails } from "./useGetSinglePropertyDetails";

export const ContextSingleProperty = createContext();

// COMPONENT START
export default function SinglePropertyDetails() {
  // VARIABLES

  const navigate = useNavigate();

  // let { dataSingleProperty = {} } = useGetSinglePropertyDetails();
  // dataSingleProperty = dataSingleProperty?.data?.[0];

  const {
    dataSingleProperty,
    statusSingleProperty,
    dataTenantDetails,
    statusTenantDetails,
    dataOtherRentedPropertiesNames,
    statusOtherRentedPropertiesNames,
  } = useGetSinglePropertyDetails();

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
        <div className="grid h-[100%] grid-rows-[auto_1fr]">
          {/* back button */}
          <button
            className="flex h-[22px] w-[40px] items-center justify-center rounded-[3px] bg-sky-400 text-white hover:bg-sky-400/80"
            onClick={() => navigate(-1)}
          >
            <HiOutlineArrowLongLeft size={"25px"} />
          </button>

          <div className="grid h-[100%] grid-cols-[1fr_300px] gap-[16px]">
            {/* Property & renter details */}
            <div className="grid grid-rows-[1fr_1fr] gap-[10px]">
              {/* portion :  property details */}
              <PropertyDetails />

              {/*Renter details portion*/}
              <TenantDetails />
            </div>

            {/*property rent details*/}
            <div className="rentDetails">
              {/* Rent details portion */}
              <RentDetails />
            </div>
          </div>
        </div>
      </ContextSingleProperty.Provider>
    );
  }

  // JSX
}
// COMPONENT END
