// hooks/useAllBookings.ts
import { useQuery } from "@tanstack/react-query";
import supabase from "../../../supabase"; // adjust path if needed

export function useGetAllBookings() {
  const { data, status } = useQuery({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false }); // optional: latest first

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });

  return {
    data,
    status,
  };
}
