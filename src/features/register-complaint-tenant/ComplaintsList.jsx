import { useLoadComplaints } from "./useLoadComplaints";
import ComplaintCard from "./ComplaintCard";
import PropTypes from "prop-types";

// Empty state component with prop validation
const EmptyState = ({ message = "No data available" }) => (
  <div className="py-8 text-center text-gray-500">{message}</div>
);

EmptyState.propTypes = {
  message: PropTypes.string,
};

// Error state component with prop validation
const ErrorState = ({ errorMessage = "An error occurred" }) => (
  <div className="rounded-md bg-red-50 p-4 text-red-700">{errorMessage}</div>
);

ErrorState.propTypes = {
  errorMessage: PropTypes.string,
};

// Loading state component
const LoadingState = () => (
  <div className="flex justify-center py-10">
    <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-blue-500"></div>
  </div>
);

const ComplaintsList = () => {
  const { complaints, isLoading, error, isEmpty, hasTenantAndPropertyInfo } =
    useLoadComplaints();

  // Complaint list rendering with prop validation
  const renderComplaints = () => (
    <div className="space-y-4">
      {complaints.map((complaint) => (
        <ComplaintCard key={complaint.id} complaint={complaint} />
      ))}
    </div>
  );

  // Main render with components
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Your Complaints</h2>

      {!hasTenantAndPropertyInfo && (
        <ErrorState errorMessage="Missing tenant or property information in URL." />
      )}

      {hasTenantAndPropertyInfo && isLoading && <LoadingState />}

      {hasTenantAndPropertyInfo && error && <ErrorState errorMessage={error} />}

      {hasTenantAndPropertyInfo && isEmpty && (
        <EmptyState message="You have not filed any complaints yet." />
      )}

      {hasTenantAndPropertyInfo &&
        !isLoading &&
        !error &&
        !isEmpty &&
        renderComplaints()}
    </div>
  );
};

export default ComplaintsList;
