import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllOccupiedFlats } from "../../../Services/apiFlats";
import { getAllOccupiedRooms } from "../../../Services/apiRooms";
import { getAllOccupiedShops } from "../../../Services/apiShops";
// import { getRenterOnID } from "../../../Services/apiRenters";

export function useGetAllOccupiedProperty() {
  //VARIABLES
  let { propertyType } = useParams();
  if (!propertyType) propertyType = "flats";

  const queryClient = useQueryClient();

  const { data: dataOccupiedProperty = [], status: statusOccupiedProperty } =
    useQuery({
      queryFn: async () => {
        if (propertyType === "flats") {
          queryClient.removeQueries({
            queryKey: ["occupiedProperty", "rooms"],
          });
          queryClient.removeQueries({
            queryKey: ["occupiedProperty", "shops"],
          });
          const data = await getAllOccupiedFlats();
          return data;
        } else if (propertyType === "rooms") {
          queryClient.removeQueries({
            queryKey: ["occupiedProperty", "flats"],
          });
          queryClient.removeQueries({
            queryKey: ["occupiedProperty", "shops"],
          });
          const data = await getAllOccupiedRooms();
          return data;
        } else if (propertyType === "shops") {
          queryClient.removeQueries({
            queryKey: ["occupiedProperty", "rooms"],
          });
          queryClient.removeQueries({
            queryKey: ["occupiedProperty", "flats"],
          });
          const data = await getAllOccupiedShops();
          return data;
        }
      },
      queryKey: ["occupiedProperty", `${propertyType}`],
    });

  return {
    dataOccupiedProperty,
    statusOccupiedProperty,
  };
}
