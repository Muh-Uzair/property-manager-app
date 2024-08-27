import PropTypes from "prop-types";

// import Portion from "../../../../ui/Portion";
import Heading from "../../../../ui/Heading";
import OtherPropertiesRented from "./OtherPropertiesRented";
import RentDuration from "./RentDuration";
import AllTenantDetailsItem from "./AllTenantDetailsItem";

import { useGetRenterDetailsOnId } from "./useGetRenterDetailsOnId";
import { useContext, useEffect } from "react";
import { ContextSingleProperty } from "../SinglePropertyDetails";

// COMPONENT START
TenantDetails.propTypes = {
  renterId: PropTypes.number,
};
export default function TenantDetails({ renterId }) {
  // VARIABLES
  let { dataRenterDetails, statusRenterDetails } =
    useGetRenterDetailsOnId(renterId);
  dataRenterDetails = dataRenterDetails?.data?.[0] || {};

  const { setIsLoading } = useContext(ContextSingleProperty);

  // FUNCTIONS
  useEffect(() => {
    function setLoadingState() {
      setIsLoading("success");
    }
    if (
      dataRenterDetails &&
      dataRenterDetails?.rent_property?.rent_property.length === 1
    )
      setLoadingState();
  }, [dataRenterDetails.rent_property, setIsLoading, dataRenterDetails]);

  // JSX

  if (dataRenterDetails) {
    return (
      <div className="grid grid-rows-[auto_1fr]">
        <Heading type="primary">Tenant Details</Heading>
        <div
          className={`h-[100%] w-[100%] rounded-[8px] bg-gray-100 p-[16px] ${statusRenterDetails === "pending" ? "flex items-center justify-center" : "grid grid-cols-[1fr_300px] gap-[16px]"}`}
        >
          {statusRenterDetails === "pending" && <span>Loading...</span>}
          {statusRenterDetails === "success" && dataRenterDetails && (
            <>
              <div className="grid grid-rows-2 gap-[16px]">
                {/*detail items*/}
                <AllTenantDetailsItem dataRenterDetails={dataRenterDetails} />

                {/* other rented properties && renter from  */}
                <div className="grid grid-cols-2 gap-[16px]">
                  <OtherPropertiesRented
                    otherRentedProperties={
                      dataRenterDetails?.rent_property?.rent_property || []
                    }
                    otherRentedPropertiesId={
                      dataRenterDetails?.propertyID?.property_id || []
                    }
                    dataRenterDetails={dataRenterDetails}
                  />

                  <RentDuration dataRenterDetails={dataRenterDetails} />
                </div>
              </div>

              {/* renter image div */}
              <div className="h-[100%] rounded-[8px] bg-gray-200"></div>
            </>
          )}
        </div>
      </div>
    );
  }
}
// COMPONENT END
