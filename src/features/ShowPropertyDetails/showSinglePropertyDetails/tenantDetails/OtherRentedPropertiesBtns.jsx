// import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { apiGetPropertyName } from "./apiOtherRentedProperties";
import { brandColor500 } from "../../../../styles/globalStyles";
// import PropTypes from "prop-types";
import { FaBuilding, FaStore } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";
import { useContext } from "react";
import { ContextSingleProperty } from "../SinglePropertyDetails";

const rentPropIconSize = "10px";

// COMPONENT START
export default function OtherRentedPropertiesBtns() {
  // VARIABLES
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const { dataOtherRentedPropertiesNames } = useContext(ContextSingleProperty);

  // FUNCTION

  return (
    <main className="flex gap-[10px]">
      {dataOtherRentedPropertiesNames
        .filter((val) => Number(val[1]) !== Number(propertyId))
        .map((val, i) => (
          <span key={i}>
            <button
              className="mb-[5px] flex items-center gap-[5px] rounded-[5px] border-[1px] border-sky-500 px-[5px] text-sky-500 transition-all duration-150 active:bg-sky-200/70 largeScreen:hover:bg-sky-100 largeScreen:active:bg-sky-200/70"
              onClick={() => navigate(`/propertyDetails/${val[0]}s/${val[1]}`)}
            >
              <>
                {val[0] === "flat" ? (
                  <FaBuilding size={rentPropIconSize} color={brandColor500} />
                ) : val[0] === "room" ? (
                  <MdBedroomChild
                    size={rentPropIconSize}
                    color={brandColor500}
                  />
                ) : val[0] === "shop" ? (
                  <FaStore size={rentPropIconSize} color={brandColor500} />
                ) : (
                  <></>
                )}
              </>
              <span className="text-[12px] font-semibold uppercase text-sky-500">{`${val[0]} ${val[2]}`}</span>
            </button>
          </span>
        ))}
    </main>
  );
}

// COMPONENT END
