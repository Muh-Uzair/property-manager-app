import { useQuery } from "@tanstack/react-query";
import { useGetPropertyType } from "../../hooks/useGetPropertyType";
import { getAllOccupiedFlatNumbers } from "../../Services/apiFlats";
import { getAllOccupiedRoomNumbers } from "../../Services/apiRooms";
import { getAllOccupiedShopNumbers } from "../../Services/apiShops";

export function useGetOccupiedPropertyNumber() {
  // VARIABLES
  const propertyType = useGetPropertyType();

  const {
    data: dataOccupiedPropertyNumber,
    status: statusOccupiedPropertyNumber,
  } = useQuery({
    queryFn: async () => {
      if (propertyType === "flats") {
        const data = getAllOccupiedFlatNumbers();
        return data;
      }
      if (propertyType === "rooms") {
        const data = getAllOccupiedRoomNumbers();
        return data;
      }
      if (propertyType === "shops") {
        const data = getAllOccupiedShopNumbers();
        return data;
      }
    },

    queryKey: ["occupiedPropertyNumbers", propertyType],
  });

  return { dataOccupiedPropertyNumber, statusOccupiedPropertyNumber };
}
