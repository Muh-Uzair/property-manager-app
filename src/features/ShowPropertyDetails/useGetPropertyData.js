import { useQuery } from "@tanstack/react-query";
import { getAllFlats } from "../../Services/apiFlats";
import { getAllShops } from "../../Services/apiShops";
import { getAllRooms } from "../../Services/apiRooms";
import { useParams } from "react-router-dom";

export const useGetPropertyData = () => {
  // VARIABLES
  const { propertyType = "flats" } = useParams();

  // FUNCTION
  const { data: dataProperty, status: statusProperty } = useQuery({
    queryFn: async () => {
      if (propertyType === "flats") {
        return await getAllFlats();
      }
      if (propertyType === "rooms") {
        return await getAllRooms();
      }
      if (propertyType === "shops") {
        return await getAllShops();
      }
    },
    queryKey: ["propertyData", propertyType],
  });

  return { dataProperty, statusProperty };
};
