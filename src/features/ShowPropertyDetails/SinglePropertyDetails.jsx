import { useNavigate, useParams } from "react-router-dom";
import { useGetSinglePropertyDetails } from "./useGetSinglePropertyDetails";
import RentDetails from "./RentDetails";
import PropertyDetails from "./PropertyDetails";
import RenterDetails from "./tenenat-details/RenterDetails";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

// COMPONENT START
export default function SinglePropertyDetails() {
  // VARIABLES
  const { propertyType } = useParams();
  let { dataSingleProperty, statusSingleProperty } =
    useGetSinglePropertyDetails();
  dataSingleProperty = dataSingleProperty?.data?.[0];
  const navigate = useNavigate();

  // FUNCTIONS

  // JSX

  return (
    <div className="">
      <button
        className="text-sky-700 hover:text-sky-400"
        onClick={() => navigate(-1)}
      >
        <HiOutlineArrowLongLeft size={"25px"} />
      </button>
      <div className="flex h-[100%] gap-[20px]">
        {/* Property & renter details */}

        <div className="grid w-[80%] grid-rows-[1fr_1fr] gap-[10px]">
          {/* portion :  property details */}

          <PropertyDetails
            propertyType={propertyType}
            dataSingleProperty={dataSingleProperty || {}}
            statusSingleProperty={statusSingleProperty}
          />

          {/*Renter details portion*/}
          <RenterDetails renterId={dataSingleProperty?.renter_id} />
        </div>

        {/*property rent details*/}
        <div className="w-[20%]">
          {/* Rent details portion */}
          <RentDetails />
        </div>
      </div>
    </div>
  );
  // JSX
}
// COMPONENT END
