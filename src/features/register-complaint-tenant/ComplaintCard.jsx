import { useState } from "react";
import PropTypes from "prop-types";
import { useDeleteComplaint } from "./useDeleteComplaint";

const ComplaintCard = ({
  complaint = {
    id: "",
    description: "",
    status: "pending",
    createdAt: null,
    updatedAt: null,
  },
}) => {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const { deleteComplaint, isDeleting } = useDeleteComplaint();

  // Helper function to get status badge color
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Handle delete
  const handleDelete = async () => {
    if (isConfirmingDelete) {
      const success = await deleteComplaint(complaint.id);
      if (success) {
        setIsConfirmingDelete(false);
      }
    } else {
      setIsConfirmingDelete(true);
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  return (
    <div className="rounded-lg border p-4 transition hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <span
          className={`rounded-full px-2 py-1 text-xs ${getStatusBadgeClass(complaint.status)}`}
        >
          {complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}
        </span>
        <div className="text-xs text-gray-500">
          {formatDate(complaint.createdAt)}
        </div>
      </div>

      <div className="mb-4 text-sm">
        <p>
          {complaint.description.length > 150
            ? `${complaint.description.substring(0, 150)}...`
            : complaint.description}
        </p>
      </div>

      <div className="mt-3 flex justify-end">
        {isConfirmingDelete ? (
          <div className="flex gap-2">
            <button
              onClick={cancelDelete}
              className="rounded bg-gray-200 px-3 py-1 text-xs text-gray-700 hover:bg-gray-300"
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="rounded bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600"
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Confirm"}
            </button>
          </div>
        ) : (
          <button
            onClick={handleDelete}
            className="rounded bg-red-100 px-3 py-1 text-xs text-red-700 hover:bg-red-200"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

// PropTypes validation
ComplaintCard.propTypes = {
  complaint: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
};

export default ComplaintCard;
