import { useNavigate, useParams } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { createContext } from "react";

import RentDetails from "./rentDetails/RentDetails";
import PropertyDetails from "./singlePropertyDetails/PropertyDetails";
import TenantDetails from "./tenantDetails/TenantDetails";

import { useGetSinglePropertyDetails } from "./useGetSinglePropertyDetails";

export const ContextSingleProperty = createContext();

// COMPONENT START
export default function SinglePropertyDetails() {
  // VARIABLES
  const { propertyType } = useParams();
  let { dataSingleProperty = {}, statusSingleProperty } =
    useGetSinglePropertyDetails();
  dataSingleProperty = dataSingleProperty?.data?.[0];
  const navigate = useNavigate();

  // FUNCTIONS

  // JSX

  return (
    <ContextSingleProperty.Provider
      value={{
        dataSingleProperty,
      }}
    >
      <div className="grid h-[100%] grid-rows-[auto_1fr]">
        <button
          className="flex h-[22px] w-[40px] items-center justify-center rounded-[3px] bg-sky-400 text-white hover:bg-sky-400/80"
          onClick={() => navigate(-1)}
        >
          <HiOutlineArrowLongLeft size={"25px"} />
        </button>
        <div className="grid h-[100%] grid-cols-[1fr_20%] gap-[16px]">
          {/* Property & renter details */}
          <div className="grid grid-rows-[1fr_1fr] gap-[10px]">
            {/* portion :  property details */}

            <PropertyDetails
              propertyType={propertyType}
              dataSingleProperty={dataSingleProperty || {}}
              statusSingleProperty={statusSingleProperty}
            />

            {/*Renter details portion*/}
            <TenantDetails renterId={dataSingleProperty?.renter_id} />
          </div>

          {/*property rent details*/}
          <div className="rentDetails">
            {/* Rent details portion */}
            <RentDetails dataSingleProperty={dataSingleProperty || {}} />
          </div>
        </div>
      </div>
    </ContextSingleProperty.Provider>
  );
  // JSX
}
// COMPONENT END
