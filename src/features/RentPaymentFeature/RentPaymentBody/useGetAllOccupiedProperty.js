import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllOccupiedFlats } from "../../../Services/apiFlats";
import { getAllOccupiedRooms } from "../../../Services/apiRooms";
import { getAllOccupiedShops } from "../../../Services/apiShops";

export function useGetAllOccupiedProperty() {
  const { propertyType } = useParams();

  const { data: dataOccupiedProperty, status: statusOccupiedProperty } =
    useQuery({
      queryFn: async () => {
        if (propertyType === "flats") {
          const data = await getAllOccupiedFlats();
          return data;
        }
        if (propertyType === "rooms") {
          const data = await getAllOccupiedRooms();
          return data;
        }
        if (propertyType === "shops") {
          const data = await getAllOccupiedShops();
          return data;
        }
      },
      queryKey: ["occupiedProperty", `${propertyType}`],
    });

  return { dataOccupiedProperty, statusOccupiedProperty };
}
