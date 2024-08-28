// import PropTypes from "prop-types";

// import Portion from "../../../../ui/Portion";
import Heading from "../../../../ui/Heading";
import OtherPropertiesRented from "./OtherPropertiesRented";
import RentDuration from "./RentDuration";
import AllTenantDetailsItem from "./AllTenantDetailsItem";

// import { useGetRenterDetailsOnId } from "./useGetRenterDetailsOnId";
import { useContext } from "react";
import { ContextSingleProperty } from "../SinglePropertyDetails";

// COMPONENT START

export default function TenantDetails() {
  // VARIABLES
  // let { dataRenterDetails, statusRenterDetails } =
  //   useGetRenterDetailsOnId(renterId);
  // dataRenterDetails = dataRenterDetails?.data?.[0] || {};

  // const { setIsLoading } = useContext(ContextSingleProperty);

  const { dataTenantDetails: dataRenterDetails = {} } = useContext(
    ContextSingleProperty,
  );

  // FUNCTIONS
  // useEffect(() => {
  //   function setLoadingState() {
  //     setIsLoading("success");
  //   }
  //   if (
  //     dataRenterDetails &&
  //     dataRenterDetails?.rent_property?.rent_property.length === 1
  //   )
  //     setLoadingState();
  // }, [dataRenterDetails.rent_property, setIsLoading, dataRenterDetails]);

  // JSX

  if (dataRenterDetails) {
    return (
      <div className="grid grid-rows-[auto_1fr]">
        <Heading type="primary">Tenant Details</Heading>
        <div
          className={`"grid gap-[16px]" h-[100%] w-[100%] grid-cols-[1fr_300px] rounded-[8px] bg-gray-100 p-[16px]`}
        >
          {/* {statusRenterDetails === "pending" && <span>Loading...</span>} */}

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
        </div>
      </div>
    );
  }
}
// COMPONENT END
