import { useGetPropertyType } from "@/hooks/useGetPropertyType";
import { apiGetAllUnoccupiedFlats } from "@/Services/apiFlats";
import { apiGetAllUnoccupiedRooms } from "@/Services/apiRooms";
import { apiGetAllUnoccupiedShops } from "@/Services/apiShops";
import { useQuery } from "@tanstack/react-query";

export function useGetAllUnoccupiedProperty() {
  const propertyType = useGetPropertyType();
  const {
    data: dataAllUnoccupiedProperty,
    status: statusAllUnoccupiedProperty,
  } = useQuery({
    queryFn: async () => {
      if (propertyType === "flats") {
        const data = await apiGetAllUnoccupiedFlats();
        return data;
      }
      if (propertyType === "rooms") {
        const data = await apiGetAllUnoccupiedRooms();
        return data;
      }
      if (propertyType === "shops") {
        const data = await apiGetAllUnoccupiedShops();
        return data;
      }
    },
    queryKey: ["unoccupiedProperty", `${propertyType}`],
  });

  return { dataAllUnoccupiedProperty, statusAllUnoccupiedProperty };
}
