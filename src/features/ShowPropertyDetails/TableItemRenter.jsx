import { useGetRenterOnID } from "./useGetRenterOnID";
import PropTypes from "prop-types";
import LoadingSpinner from "../../ui/LoadingSpinner";

// COMPONENT START
export default function TableItemRenter({ renter_id }) {
  const { dataRenter, statusRenter } = useGetRenterOnID(renter_id);

  return (
    <span className="font-bold text-gray-500">
      {statusRenter === "pending" ? (
        <LoadingSpinner size={15} />
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
