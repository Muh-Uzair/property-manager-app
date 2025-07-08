// hooks/useNewBooking.ts
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import supabase from "../../../supabase"; // adjust this path if needed

export function useNewBooking() {
  const mutation = useMutation({
    mutationFn: async ({ id }) => {
      const { data, error } = await supabase
        .from("bookings")
        .insert([{ property_id: id }]); // make sure column name is correct

      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      toast.success("Booking done");
    },
    onError: (err) => {
      toast.error(`Booking failed: ${err.message}`);
    },
  });

  return {
    mutationFn: mutation.mutate,
    status: mutation.status,
  };
}
