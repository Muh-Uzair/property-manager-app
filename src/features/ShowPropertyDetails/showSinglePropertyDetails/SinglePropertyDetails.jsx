import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { createContext } from "react";

// import RentDetails from "./rentDetails/RentDetails";
import PropertyDetails from "./singlePropertyDetails/PropertyDetails";
// import TenantDetails from "./tenantDetails/TenantDetails";

import { useGetSinglePropertyDetails } from "./useGetSinglePropertyDetails";

export const ContextSingleProperty = createContext();

// COMPONENT START
export default function SinglePropertyDetails() {
  // VARIABLES

  const navigate = useNavigate();

  // let { dataSingleProperty = {} } = useGetSinglePropertyDetails();
  // dataSingleProperty = dataSingleProperty?.data?.[0];

  const x = useGetSinglePropertyDetails();

  console.log(x);

  // FUNCTIONS

  // JSX

  // if (
  //   statusTenantDetails === "pending" ||
  //   statusOtherRentedPropertiesNames === "pending"
  // )
  //   return <span>LOADING...</span>;

  return (
    <ContextSingleProperty.Provider value={{}}>
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
            {/* <TenantDetails renterId={dataSingleProperty?.renter_id} /> */}
            <div>tenant details</div>
          </div>

          {/*property rent details*/}
          <div className="rentDetails">
            {/* Rent details portion */}
            {/* <RentDetails dataSingleProperty={dataSingleProperty || {}} /> */}
            rent details
          </div>
        </div>
      </div>
    </ContextSingleProperty.Provider>
  );

  // JSX
}
// COMPONENT END
