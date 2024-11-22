import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";

import Button from "@/ui/Button";

// COMPONENT START
export default function FlatDisplayCard({ val, type = "flats" }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="grid h-[280px] w-[220px] grid-rows-[70%_1fr] rounded-[5px] border border-brand-color-200 bg-gray-100">
      <div>
        <img
          className="h-[100%] w-[100%] rounded-t-[3px] object-cover"
          src={val?.image}
        />
      </div>
      <div className="grid grid-cols-[60%_1fr] rounded-b-[5px] border-t-[1px] border-brand-color-200 bg-white p-[5px]">
        <div className="flex flex-col pl-[5px]">
          <p className="text-[18px] font-bold text-brand-color-700">
            {type === "flats"
              ? `Flat ${val?.flat_number}`
              : type === "rooms"
                ? `Room ${val?.room_number}`
                : type === "shops"
                  ? `Shop ${val?.shop_number}`
                  : "Flat"}
          </p>
          <Chip
            sx={{
              backgroundColor: " #e0f2fe",
              fontSize: "10px",
              height: "15px",
              width: val?.status === "occupied" ? "80px" : "90px",
              fontWeight: "700",
              color: "#0ea5e9",
              border: "1px solid #0ea5e9 ",
              paddingTop: "2px",
            }}
            label={val?.status}
            className="uppercase"
          />
        </div>
        <div className="flex items-end justify-center pb-[5px]">
          <Button>
            <Link
              to={
                val?.status === "occupied"
                  ? `/propertyDetails/${type}/${val?.id}`
                  : `/admissions/${type}/${val?.id}`
              }
            >
              {val?.status === "occupied" ? "view" : "occupy"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
  // JSX
}

FlatDisplayCard.propTypes = {
  val: PropTypes.object,
  type: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
