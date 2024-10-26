import { useGetPropertyType } from "@/hooks/useGetPropertyType";
import { apiLeaveFlat } from "@/Services/apiFlats";
import { removeTenant } from "@/Services/apiRenters";
import { apiLeaveRoom } from "@/Services/apiRooms";
import { apiLeaveShop } from "@/Services/apiShops";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLeaveProperty() {
  const propertyType = useGetPropertyType();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: mutateLeaveProperty, status: statusLeaveProperty } =
    useMutation({
      mutationFn: async ({ propertyId, tenantId }) => {
        if (propertyType === "flats") {
          await apiLeaveFlat(propertyId);
        }
        if (propertyType === "rooms") {
          await apiLeaveRoom(propertyId);
        }
        if (propertyType === "shops") {
          await apiLeaveShop(propertyId);
        }

        await removeTenant(tenantId);
      },
      onSuccess: () => {
        toast.success(
          `${propertyType.at(0).toUpperCase()}${propertyType.slice(1, 3)} successfully empty`,
        );
        queryClient.clear();
        navigate(`/propertyDetails/${propertyType}`);
      },
      onError: () => {
        toast.error(`Unable to leave ${propertyType}`);
      },
    });

  return { mutateLeaveProperty, statusLeaveProperty };
}
