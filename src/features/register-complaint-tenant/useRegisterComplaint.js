import { useSearchParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import supabase from "../../../supabase";

export function useRegisterComplaint() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Get values from URL search params
  const renterId = searchParams.get("renterId");
  const propertyId = searchParams.get("propertyId");

  // Create a mutation function
  const registerComplaintFn = async (description) => {
    if (!renterId || !propertyId) {
      throw new Error("Missing tenant or property information");
    }

    const { data, error: supabaseError } = await supabase
      .from("complaints")
      .insert([
        {
          tenant_id: renterId,
          property_id: propertyId,
          complaint_details: description,
        },
      ])
      .select();

    if (supabaseError) {
      throw supabaseError;
    }

    return data;
  };

  // Use the useMutation hook from TanStack Query
  const mutation = useMutation({
    mutationFn: registerComplaintFn,
    onSuccess: () => {
      // Invalidate and refetch the complaints list query when a new complaint is added
      toast.success("Complaint registered successfully");
      queryClient.invalidateQueries({
        queryKey: ["complaints", renterId, propertyId],
      });
    },
    onError: (error) => {
      console.error("Error registering complaint:", error);
      toast.error(error.message || "Failed to register complaint");
    },
  });

  // Create a wrapper function that handles the mutation
  const registerComplaint = async (description) => {
    try {
      const data = await mutation.mutateAsync(description);
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  };

  return {
    registerComplaint,
    isSubmitting: mutation.isPending,
    error: mutation.error?.message,
    reset: mutation.reset,
  };
}
