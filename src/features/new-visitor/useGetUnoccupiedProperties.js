import { useGetPropertyType } from "@/hooks/useGetPropertyType";
import { apiGetAllUnoccupiedFlats } from "@/Services/apiFlats";
import { apiGetAllUnoccupiedRooms } from "@/Services/apiRooms";
import { apiGetAllUnoccupiedShops } from "@/Services/apiShops";
import { useQuery } from "@tanstack/react-query";

export function useGetUnoccupiedProperties() {
  const propertyType = useGetPropertyType();
  const {
    data: dataAllUnoccupiedProperty = [],
    status: statusAllUnoccupiedProperty,
  } = useQuery({
    queryFn: async () => {
      const data1 = await apiGetAllUnoccupiedFlats();

      const data2 = await apiGetAllUnoccupiedRooms();

      const data3 = await apiGetAllUnoccupiedShops();

      return [data1, data2, data3];
    },
    queryKey: ["unoccupiedProperty", `${propertyType}`],
  });

  return { dataAllUnoccupiedProperty, statusAllUnoccupiedProperty };
}
