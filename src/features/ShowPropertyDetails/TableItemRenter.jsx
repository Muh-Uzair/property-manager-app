import { useGetRenterOnID } from "./useGetRenterOnID";
import PropTypes from "prop-types";
import { Skeleton } from "@mui/material";

// COMPONENT START
export default function TableItemRenter({ renter_id }) {
  const { dataRenter, statusRenter } = useGetRenterOnID(renter_id);

  return (
    <span className="font-bold text-gray-500">
      {statusRenter === "pending" ? (
        <Skeleton
          variant="rectangular"
          width={50}
          height={16}
          animation="wave"
          sx={{
            borderRadius: "3px",
            bgcolor: "grey.100",
          }}
        />
      ) : dataRenter ? (
        dataRenter
      ) : (
        "-"
      )}
    </span>
  );
}

TableItemRenter.propTypes = {
  renter_id: PropTypes.number.isRequired,
};
