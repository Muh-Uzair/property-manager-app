import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import supabase from "../../../supabase";

export function useLoadComplaints() {
  const [searchParams] = useSearchParams();

  // Get values from URL search params
  const renterId = searchParams.get("renterId");
  const propertyId = searchParams.get("propertyId");

  // Define the query function
  const fetchComplaints = async () => {
    if (!renterId || !propertyId) {
      throw new Error("Missing tenant or property information");
    }

    const { data, error } = await supabase
      .from("complaints")
      .select("*")
      .eq("tenant_id", renterId)
      .eq("property_id", propertyId)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    // Transform data if needed
    return data.map((complaint) => ({
      id: complaint.id,
      description: complaint.complaint_details,
      status: complaint.status || "pending",
      createdAt: complaint.created_at,
      updatedAt: complaint.updated_at,
    }));
  };

  // Use TanStack Query to fetch complaints
  const {
    data: complaints = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["complaints", renterId, propertyId],
    queryFn: fetchComplaints,
    enabled: Boolean(renterId && propertyId),
    staleTime: 30000, // Consider data fresh for 30 seconds
    refetchOnWindowFocus: true,
  });

  return {
    complaints,
    isLoading,
    error: error?.message,
    refetch,
    hasComplaints: complaints.length > 0,
    isError: !!error,
    isEmpty: complaints.length === 0 && !isLoading && !error,
    hasTenantAndPropertyInfo: Boolean(renterId && propertyId),
  };
}
