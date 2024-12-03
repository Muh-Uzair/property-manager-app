import Portion from "../../ui/Portion";
import Heading from "../../ui/Heading";
import PropTypes from "prop-types";
import { useGetRenterDetailsOnId } from "../propertyDetails/useGetRenterDetailsOnId";
import OtherPropertiesRented from "../OtherPropertiesRented";
import AllRenterDetailsItem from "./AllRenterDetailsItem";
import RenterFromCMP from "./RenterFromCmp";

// COMPONENT START
RenterDetails.propTypes = {
  renterId: PropTypes.number,
};
export default function RenterDetails({ renterId }) {
  // VARIABLES
  let { dataRenterDetails, statusRenterDetails } =
    useGetRenterDetailsOnId(renterId);
  dataRenterDetails = dataRenterDetails?.data?.[0] || {};

  // FUNCTIONS

  // JSX

  return (
    <Portion type="horizontal" gap={5} width="w-[100%]">
      <Heading type="primary">Tenant Details</Heading>
      <div
        className={`h-[100%] w-[100%] rounded-[8px] bg-gray-100 p-[16px] ${statusRenterDetails === "pending" ? "flex items-center justify-center" : "grid grid-cols-[1fr_30%] gap-[16px]"}`}
      >
        {statusRenterDetails === "pending" && <span>Loading...</span>}
        {statusRenterDetails === "success" && dataRenterDetails && (
          <>
            <div className="grid grid-rows-2 gap-[16px]">
              {/*detail items*/}
              <AllRenterDetailsItem dataRenterDetails={dataRenterDetails} />

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

                <RenterFromCMP dataRenterDetails={dataRenterDetails} />
              </div>
            </div>

            {/* renter image div */}
            <div className="h-[100%] rounded-[8px] bg-gray-200"></div>
          </>
        )}
      </div>
    </Portion>
  );
}
// COMPONENT END
