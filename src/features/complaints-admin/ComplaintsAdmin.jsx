import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useLoadAllComplaints } from "./useLoadAllComplaints";
import ComplaintCard from "./ComplaintCard";
import LoadingSpinner from "@/ui/LoadingSpinner";

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000, // 1 minute
      retry: 1,
    },
  },
});

// Inner component that uses the hooks
const ComplaintsAdminContent = () => {
  const [searchParams] = useSearchParams();

  // Get propertyId and tenantId from URL if available
  const propertyId = searchParams.get("propertyId");
  const tenantId = searchParams.get("renterId");

  // Fetch all complaints
  const {
    data: complaints = [],
    isLoading,
    isError,
    error,
  } = useLoadAllComplaints();

  // Filter complaints based on property and tenant IDs from URL
  const filteredComplaints = complaints.filter((complaint) => {
    // Filter by propertyId if provided in URL
    if (propertyId && complaint.property_id !== propertyId) {
      return false;
    }

    // Filter by tenantId if provided in URL
    if (tenantId && complaint.tenant_id !== tenantId) {
      return false;
    }

    return true;
  });

  if (isLoading) {
    return (
      <div className="flex h-[100vh] w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg bg-red-50 p-6 text-center text-red-600">
        <p>Error loading complaints</p>
        <p className="text-sm">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Complaint Management
        </h1>
      </div>

      {/* Filter info */}
      {(propertyId || tenantId) && (
        <div className="mb-4 rounded-md bg-blue-50 p-3 text-blue-800">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              {propertyId && tenantId
                ? "Viewing complaints for specific property and tenant"
                : propertyId
                  ? "Viewing complaints for specific property"
                  : "Viewing complaints for specific tenant"}
            </span>
          </div>
        </div>
      )}

      {/* Complaints list */}
      {filteredComplaints.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-gray-500">No complaints found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredComplaints.map((complaint) => (
            <ComplaintCard key={complaint.id} complaint={complaint} />
          ))}
        </div>
      )}
    </div>
  );
};

// Main component wrapped with QueryClientProvider
const ComplaintsAdmin = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComplaintsAdminContent />
    </QueryClientProvider>
  );
};

export default ComplaintsAdmin;
