import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import { Link, useParams } from "react-router-dom";
import { FaBuilding, FaStore } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";

import Button from "@/ui/Button";
import { useGetPropertyType } from "@/hooks/useGetPropertyType";
import { getPropertyTypeValidForm } from "@/utils/helpers";
import { brandColor500 } from "@/styles/globalStyles";

// COMPONENT START
export default function OtherUnoccupiedProperties({
  dataAllUnoccupiedProperty,
}) {
  // VARIABLES
  const { propertyId } = useParams();
  const propertyType = useGetPropertyType();

  console.log(dataAllUnoccupiedProperty);

  // FUNCTIONS

  // JSX
  return (
    <div className="grid h-[520px] grid-cols-3 gap-[20px] overflow-y-auto rounded-[8px] bg-gray-200 p-[20px]">
      {dataAllUnoccupiedProperty.map(
        (val, i) =>
          Number(val?.id) !== Number(propertyId) && (
            <div
              key={i}
              className="flex h-[180px] flex-col justify-between rounded-[8px] border border-brand-color-500 bg-brand-color-200 p-[10px]"
            >
              {/* icon div */}
              <div className="flex gap-[10px] rounded-[5px] bg-brand-color-500 p-[10px]">
                {/* displays and icon */}
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand-color-200 p-[10px] text-[25px] text-brand-color-500">
                  {propertyType === "flats" ? (
                    <FaBuilding />
                  ) : propertyType === "rooms" ? (
                    <MdBedroomChild />
                  ) : propertyType === "shops" ? (
                    <FaStore />
                  ) : (
                    ""
                  )}
                </div>

                {/* display property name */}
                <div className="flex h-[50px] flex-col">
                  <p className="text-[20px] font-semibold text-brand-color-200">{`${getPropertyTypeValidForm(propertyType)} ${propertyType === "flats" ? val?.flat_number : propertyType === "rooms" ? val?.room_number : propertyType === "shops" ? val?.shop_number : ""}`}</p>

                  <Chip
                    label={`${val?.status}`}
                    sx={{
                      backgroundColor: "#bae6fd",
                      color: `${brandColor500}`,
                      fontWeight: 700,
                    }}
                  />
                  {/* <p className="text-[12px] text-gray-100">{`${val?.status}`}</p> */}
                </div>
              </div>

              {/* details div */}
              <div>
                <Button type="primary">
                  <Link to={`/admissions/${propertyType}/${val?.id}`}>
                    {" "}
                    View details
                  </Link>
                </Button>
              </div>
            </div>
          ),
      )}
    </div>
  );
  // JSX
}

OtherUnoccupiedProperties.propTypes = {
  dataAllUnoccupiedProperty: PropTypes.array,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
