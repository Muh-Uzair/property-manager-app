import { useQuery } from "@tanstack/react-query";
import supabase from "../../../supabase";

/**
 * Custom hook to load all complaints from Supabase
 */
export function useLoadAllComplaints() {
  return useQuery({
    queryKey: ["admin-complaints"],
    queryFn: async () => {
      const { data: complaints, error } = await supabase
        .from("complaints")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(`Error fetching complaints: ${error.message}`);
      }

      return complaints || [];
    },
  });
}
