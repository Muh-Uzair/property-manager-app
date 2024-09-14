import { useMutation } from "@tanstack/react-query";
import { payRentFlats } from "../../../Services/apiFlats";
import toast from "react-hot-toast";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { payRentRooms } from "../../../Services/apiRooms";
import { payRentShops } from "../../../Services/apiShops";

export function usePayRent() {
  const propertyType = useGetPropertyType();

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
    },
    onSuccess: () => {
      toast.success("Rent paid");
    },
  });

  return { mutatePayRent, statusPayRent };
}
