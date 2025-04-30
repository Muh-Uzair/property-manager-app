import { useQuery } from "@tanstack/react-query";
import supabase from "../../../supabase";

/**
 * Custom hook to load tenant information by tenant_id
 * @param {string|number} tenantId - The ID of the tenant
 */
export function useLoadTenantInfo(tenantId) {
  return useQuery({
    queryKey: ["tenant-info", tenantId],
    queryFn: async () => {
      if (!tenantId) return null;

      const { data, error } = await supabase
        .from("renters")
        .select("*")
        .eq("id", tenantId)
        .single();

      if (error) {
        throw new Error(`Error fetching tenant info: ${error.message}`);
      }

      return data;
    },
    enabled: Boolean(tenantId), // Only run the query if tenantId is provided
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });
}
