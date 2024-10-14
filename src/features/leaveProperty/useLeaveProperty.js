import { useGetPropertyType } from "@/hooks/useGetPropertyType";
import { apiLeaveFlat } from "@/Services/apiFlats";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useLeaveProperty() {
  const propertyType = useGetPropertyType();

  const { mutate: mutateLeaveProperty, status: statusLeaveProperty } =
    useMutation({
      mutationFn: async (propertyId) => {
        if (propertyType === "flats") {
          return apiLeaveFlat(propertyId);
        }
        if (propertyType === "rooms") {
          console.log("hello rooms");
        }
        if (propertyType === "shops") {
          console.log("hello shops");
        }
      },
      onSuccess: () => {
        toast.success(
          `${propertyType.at(0).toUpperCase()}${propertyType.slice(1, 3)} successfully empty`,
        );
      },
      onError: () => {
        toast.error(`Unable to leave ${propertyType}`);
      },
    });

  return { mutateLeaveProperty, statusLeaveProperty };
}
