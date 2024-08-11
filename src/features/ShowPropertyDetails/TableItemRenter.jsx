import { useGetRenterOnID } from "./useGetRenterOnID";
import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

// COMPONENT START
export default function TableItemRenter({ renter_id }) {
  const { dataRenter, statusRenter } = useGetRenterOnID(renter_id);

  return (
    <span className="font-bold text-gray-500">
      {statusRenter === "pending" ? (
        <CircularProgress size={10} disableShrink={true} />
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
