import { useQuery } from "@tanstack/react-query";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { useParams } from "react-router-dom";
import { getFlatEditData } from "../../../Services/apiFlats";
import { getRoomEditData } from "../../../Services/apiRooms";
import { getShopEditData } from "../../../Services/apiShops";
import { getTenantDataPropertyEdit } from "../../../Services/apiRenters";

export function useGetPropertyEditData() {
  const propertyType = useGetPropertyType();
  const { propertyId } = useParams();

  const { data: dataPropertyEdit, status: statusPropertyEdit } = useQuery({
    queryFn: async () => {
      if (propertyType === "flats") {
        const data = await getFlatEditData(propertyId);
        return data;
      }
      if (propertyType === "rooms") {
        const data = await getRoomEditData(propertyId);
        return data;
      }
      if (propertyType === "shops") {
        const data = await getShopEditData(propertyId);
        return data;
      }
    },
    queryKey: ["dataPropertyEdit", propertyType, propertyId],
  });

  const { data: dataTenantPropertyEdit, status: statusTenantPropertyEdit } =
    useQuery({
      queryFn: async () => {
        if (dataPropertyEdit[0]?.renter_id) {
          console.log(dataPropertyEdit[0]?.renter_id);
          getTenantDataPropertyEdit(dataPropertyEdit[0]?.renter_id);
        } else return [];
      },
      queryKey: ["dataTenantPropertyEdit", propertyType, propertyId],
    });

  return {
    dataPropertyEdit,
    statusPropertyEdit,
    dataTenantPropertyEdit,
    statusTenantPropertyEdit,
  };
}
