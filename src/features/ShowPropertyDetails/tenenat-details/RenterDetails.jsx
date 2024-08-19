import Portion from "../../../ui/Portion";
import Heading from "../../../ui/Heading";
import PropTypes from "prop-types";
import { useGetRenterDetailsOnId } from "../useGetRenterDetailsOnId";
import { HiMiniIdentification } from "react-icons/hi2";
import { brandColor500 } from "../../../styles/globalStyles";
import { FaFlag, FaHeart, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import OtherPropertiesRented from "./OtherPropertiesRented";
import RenterDetailItem from "./RenterDetailItem";

// COMPONENT START
RenterDetails.propTypes = {
  renterId: PropTypes.number.isRequired,
};
export default function RenterDetails({ renterId }) {
  // VARIABLES
  let { dataRenterDetails, statusRenterDetails } =
    useGetRenterDetailsOnId(renterId);
  dataRenterDetails = dataRenterDetails?.data?.[0];

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
              <div className="grid h-[100%] grid-cols-3 grid-rows-2 gap-[16px]">
                {/* id car no */}
                <RenterDetailItem
                  icon={
                    <HiMiniIdentification size={`28px`} color={brandColor500} />
                  }
                  itemHeading={"ID CARD NO"}
                  itemValue={dataRenterDetails?.id_card_number}
                />
                {/* contact info */}
                <RenterDetailItem
                  icon={<FaPhoneAlt size={`28px`} color={brandColor500} />}
                  itemHeading={"CONTACT"}
                  itemValue={dataRenterDetails?.contact_info}
                />
                {/* marital status */}
                <RenterDetailItem
                  icon={<FaHeart size={`28px`} color={brandColor500} />}
                  itemHeading={"MARITAL STATUS"}
                  itemValue={
                    dataRenterDetails?.marital_status === "unmarried"
                      ? "single"
                      : "married"
                  }
                />
                {/* name */}
                <RenterDetailItem
                  icon={<FaUser size={`28px`} color={brandColor500} />}
                  itemHeading={"NAME"}
                  itemValue={dataRenterDetails?.name}
                />
                {/* nationality  */}
                <RenterDetailItem
                  icon={<FaFlag size={`28px`} color={brandColor500} />}
                  itemHeading={"NATIONALITY"}
                  itemValue={dataRenterDetails?.nationality}
                />
                {/* occupation */}
                <RenterDetailItem
                  icon={<MdWork size={`28px`} color={brandColor500} />}
                  itemHeading={"OCCUPATION"}
                  itemValue={dataRenterDetails?.occupation}
                />
              </div>

              <div className="grid grid-cols-2 gap-[16px]">
                <OtherPropertiesRented
                  otherRentedProperties={
                    dataRenterDetails?.rent_property?.rent_property
                  }
                  otherRentedPropertiesId={
                    dataRenterDetails?.propertyID?.property_id
                  }
                />

                <div className="rounded-[8px] bg-red-600"></div>
              </div>
            </div>

            {/* renter image div */}
            <div className="h-[100%] rounded-[8px] bg-gray-400/50"></div>
          </>
        )}
      </div>
    </Portion>
  );
}
// COMPONENT END
