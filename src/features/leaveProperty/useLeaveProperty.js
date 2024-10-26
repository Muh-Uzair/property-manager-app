import { useGetPropertyType } from "@/hooks/useGetPropertyType";
import { apiGetFlatDataOnTenantId, apiLeaveFlat } from "@/Services/apiFlats";
import { removeTenant } from "@/Services/apiRenters";
import { apiGetRoomDataOnTenantId, apiLeaveRoom } from "@/Services/apiRooms";
import { apiGetShopDataOnTenantId, apiLeaveShop } from "@/Services/apiShops";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLeaveProperty() {
  // VARIABLES
  const propertyType = useGetPropertyType();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: mutateLeaveProperty, status: statusLeaveProperty } =
    useMutation({
      mutationFn: async ({ propertyId, tenantId }) => {
        let haveOtherProperties = false;

        const flatDataOnTenantId = await apiGetFlatDataOnTenantId(tenantId);
        const roomDataOnTenantId = await apiGetRoomDataOnTenantId(tenantId);
        const shopDataOnTenantId = await apiGetShopDataOnTenantId(tenantId);

        console.log(flatDataOnTenantId);
        console.log(roomDataOnTenantId);
        console.log(shopDataOnTenantId);

        if (propertyType === "flats") {
          await apiLeaveFlat(propertyId);
        }
        if (propertyType === "rooms") {
          await apiLeaveRoom(propertyId);
        }
        if (propertyType === "shops") {
          await apiLeaveShop(propertyId);
        }

        if (haveOtherProperties) {
          await removeTenant(tenantId);
        }
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
