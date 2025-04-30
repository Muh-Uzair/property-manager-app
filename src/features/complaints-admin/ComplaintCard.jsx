import PropTypes from "prop-types";
import { useLoadTenantInfo } from "./useLoadTenantInfo";
import { useLoadPropertyInfo } from "./useLoadPropertyInfo";

const ComplaintCard = ({ complaint }) => {
  const { data: tenantInfo, isLoading: loadingTenant } = useLoadTenantInfo(
    complaint.tenant_id,
  );

  const { data: propertyInfo, isLoading: loadingProperty } =
    useLoadPropertyInfo(complaint.property_id);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex rounded-full bg-yellow-500 px-2 py-1 text-xs font-semibold text-white`}
          >
            {complaint.status || "Pending"}
          </span>
          <span className="text-sm text-gray-500">
            ID: {complaint.id} | {formatDate(complaint.created_at)}
          </span>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Property and Tenant Info */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          {/* Property Info */}
          <div className="rounded border border-gray-100 bg-gray-50 p-3">
            <h4 className="mb-2 text-xs font-medium uppercase text-gray-500">
              Property
            </h4>
            {loadingProperty ? (
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
            ) : propertyInfo ? (
              <div className="text-sm">
                <div className="font-medium capitalize">
                  {propertyInfo.propertyType.slice(0, -1)}{" "}
                  {propertyInfo.propertyNumber}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Floor: {propertyInfo.floor}
                </div>
              </div>
            ) : (
              <div className="text-xs italic text-gray-500">
                Property not found
              </div>
            )}
          </div>

          {/* Tenant Info */}
          <div className="rounded border border-gray-100 bg-gray-50 p-3">
            <h4 className="mb-2 text-xs font-medium uppercase text-gray-500">
              Tenant
            </h4>
            {loadingTenant ? (
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
            ) : tenantInfo ? (
              <div className="text-sm">
                <div className="font-medium">{tenantInfo.name}</div>
                <div className="mt-1 text-xs text-gray-500">
                  {tenantInfo.phone_number}
                </div>
              </div>
            ) : (
              <div className="text-xs italic text-gray-500">
                Tenant not found
              </div>
            )}
          </div>
        </div>

        {/* Complaint Details */}
        <div className="mb-2 font-medium">Complaint Details:</div>
        <p className="mb-4 text-sm text-gray-700">
          {complaint.complaint_details}
        </p>
      </div>
    </div>
  );
};

ComplaintCard.propTypes = {
  complaint: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tenant_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    property_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    complaint_details: PropTypes.string,
    status: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default ComplaintCard;
