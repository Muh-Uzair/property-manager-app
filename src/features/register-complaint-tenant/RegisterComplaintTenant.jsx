import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewComplaint from "./NewComplaint";
import ComplaintsList from "./ComplaintsList";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30 * 1000, // 30 seconds
    },
  },
});

const RegisterComplaintTenant = () => {
  const [activeTab, setActiveTab] = useState("new"); // "new" or "existing"

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto max-w-6xl p-4">
        <h1 className="mb-6 text-2xl font-bold">Tenant Complaints</h1>

        {/* Tab Navigation */}
        <div className="mb-6 flex border-b">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "new"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("new")}
          >
            Register New Complaint
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "existing"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("existing")}
          >
            Your Complaints
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "new" ? <NewComplaint /> : <ComplaintsList />}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default RegisterComplaintTenant;
