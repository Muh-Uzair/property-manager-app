import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import supabase from "../../../supabase";

export function useDeleteComplaint() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Get values from URL search params for cache invalidation
  const renterId = searchParams.get("renterId");
  const propertyId = searchParams.get("propertyId");

  // Create the delete function
  const deleteComplaintFn = async (complaintId) => {
    if (!complaintId) {
      throw new Error("Complaint ID is required");
    }

    const { error } = await supabase
      .from("complaints")
      .delete()
      .eq("id", complaintId);

    if (error) {
      throw error;
    }

    return { success: true, complaintId };
  };

  // Create the mutation
  const mutation = useMutation({
    mutationFn: deleteComplaintFn,
    onSuccess: () => {
      // Invalidate and refetch after deletion
      queryClient.invalidateQueries({
        queryKey: ["complaints", renterId, propertyId],
      });
      toast.success("Complaint deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete complaint");
    },
  });

  // Create a wrapper function for better UX handling
  const deleteComplaint = async (complaintId) => {
    try {
      await mutation.mutateAsync(complaintId);
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    deleteComplaint,
    isDeleting: mutation.isPending,
    error: mutation.error?.message,
    reset: mutation.reset,
  };
}
