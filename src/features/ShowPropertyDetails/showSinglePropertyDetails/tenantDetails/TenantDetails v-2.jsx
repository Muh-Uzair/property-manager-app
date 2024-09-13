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
      <div className="flex flex-col">
        <Heading type="primary">Tenant Details</Heading>

        {/* Tenant details */}
        <div
          className={`flex flex-col gap-[7px] rounded-[5px] bg-gray-100 p-[7px]`}
        >
          {/*detail items*/}
          <AllTenantDetailsItem dataRenterDetails={dataRenterDetails} />

          <OtherPropertiesRented dataRenterDetails={dataRenterDetails} />

          <RentDuration dataRenterDetails={dataRenterDetails} />

          {/* renter image div */}
          <div className="h-[160px] rounded-[8px] bg-gray-200 smallTab:h-[250px]">
            img
          </div>
        </div>
      </div>
    );
  }
}
// COMPONENT END
