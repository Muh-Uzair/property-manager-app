//

import Heading from "../../../../ui/Heading";
import OtherPropertiesRented from "./OtherPropertiesRented";
import RentDuration from "./RentDuration";
import AllTenantDetailsItem from "./AllTenantDetailsItem";

import { useContext } from "react";
import { ContextSingleProperty } from "../SinglePropertyDetails";

// COMPONENT START

export default function TenantDetails() {
  // VARIABLES
  let { dataTenantDetails: dataRenterDetails } = useContext(
    ContextSingleProperty,
  );
  dataRenterDetails = dataRenterDetails?.data?.[0];

  // FUNCTIONS

  // JSX

  if (dataRenterDetails) {
    return (
      <div className="flex h-full grid-rows-[auto_1fr] flex-col largeScreen:grid">
        <Heading type="primary">Tenant Details</Heading>

        {/* DIVIDER Tenant Details for Large screen */}
        <div className="hidden grid-cols-[60%_1fr] gap-[16px] rounded-[8px] bg-gray-100 p-[16px] largeScreen:grid">
          {/* details */}
          <div className="grid h-full grid-rows-[1fr_40%] gap-[10px]">
            {/* tenant details */}
            <div>
              <AllTenantDetailsItem dataRenterDetails={dataRenterDetails} />
            </div>

            {/* other rented properties and rent duration */}
            <div className="grid grid-cols-2 gap-[10px]">
              <OtherPropertiesRented dataRenterDetails={dataRenterDetails} />
              <RentDuration dataRenterDetails={dataRenterDetails} />
            </div>
          </div>

          {/* image */}
          <div className="flex justify-center rounded-[8px] bg-gray-200">
            <img className="rounded-[8px]" src={dataRenterDetails.image} />
          </div>
        </div>

        {/* DIVIDER Tenant details for phone , STab , LTab */}
        <div
          className={`flex flex-col gap-[7px] rounded-[5px] bg-gray-100 p-[7px] largeScreen:hidden`}
        >
          {/*detail items*/}
          <AllTenantDetailsItem dataRenterDetails={dataRenterDetails} />

          <OtherPropertiesRented dataRenterDetails={dataRenterDetails} />

          <RentDuration dataRenterDetails={dataRenterDetails} />

          {/* renter image div */}
          <div className="flex h-[160px] justify-center rounded-[8px] bg-gray-200 smallTab:h-[250px]">
            <div className="h-[full] w-[40%] bg-slate-400">
              <img
                className="h-full w-full object-cover"
                src={dataRenterDetails.image}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// COMPONENT END
