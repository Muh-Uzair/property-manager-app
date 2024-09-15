import { useMutation, useQueryClient } from "@tanstack/react-query";
import { payRentFlats } from "../../../Services/apiFlats";
import toast from "react-hot-toast";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { payRentRooms } from "../../../Services/apiRooms";
import { payRentShops } from "../../../Services/apiShops";
import { useNavigate } from "react-router-dom";

export function usePayRent() {
  const propertyType = useGetPropertyType();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: mutatePayRent, status: statusPayRent } = useMutation({
    mutationFn:
      propertyType === "flats"
        ? payRentFlats
        : propertyType === "rooms"
          ? payRentRooms
          : propertyType === "shops"
            ? payRentShops
            : null,
    onError: () => {
      toast.error("Error paying rent");
      queryClient.clear();
      navigate("/home");
    },
    onSuccess: () => {
      toast.success("Rent paid");
      queryClient.clear();
      navigate("/home");
    },
  });

  return { mutatePayRent, statusPayRent };
}
