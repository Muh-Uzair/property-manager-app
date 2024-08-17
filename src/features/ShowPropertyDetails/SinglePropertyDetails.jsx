import { useParams } from "react-router-dom";
import { useGetSinglePropertyDetails } from "./useGetSinglePropertyDetails";
import RentDetails from "./RentDetails";
import PropertyDetails from "./PropertyDetails";
import RenterDetails from "./tenenat-details/RenterDetails";

// COMPONENT START
export default function SinglePropertyDetails() {
  // VARIABLES

  const { propertyType } = useParams();
  let { dataSingleProperty, statusSingleProperty } =
    useGetSinglePropertyDetails();
  dataSingleProperty = dataSingleProperty?.data?.[0];

  // FUNCTIONS

  // JSX

  return (
    <div className="l flex h-[100%] gap-[20px]">
      {/* Property & renter details */}
      <div className="grid w-[80%] grid-rows-[1fr_1fr] gap-[10px]">
        {/* portion :  property details */}

        <PropertyDetails
          propertyType={propertyType}
          dataSingleProperty={dataSingleProperty || {}}
          statusSingleProperty={statusSingleProperty}
        />

        {/*Renter details portion*/}
        {dataSingleProperty && (
          <RenterDetails renterId={dataSingleProperty?.renter_id} />
        )}
      </div>

      {/*property rent details*/}
      <div className="w-[20%]">
        {/* Rent details portion */}
        <RentDetails />
      </div>
    </div>
  );
  // JSX
}
// COMPONENT END
