import { useQuery } from "@tanstack/react-query";
import { getAllFlats } from "../../Services/apiFlats";
import { getAllShops } from "../../Services/apiShops";
import { getAllRooms } from "../../Services/apiRooms";
import { useParams } from "react-router-dom";

export const useGetPropertyData = () => {
  // VARIABLES
  const { propertyType = "flats" } = useParams();

  // FUNCTION
  const { data, status: statusProperty } = useQuery({
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

  if (propertyType === "flats") {
    const { dataFlats: dataProperty, totalFlats: totalProperty } = data || {}; // De-structure flats data
    return { statusProperty, data: { dataProperty, totalProperty } };
  }
  if (propertyType === "rooms") {
    const { dataRooms: dataProperty, totalRooms: totalProperty } = data || {}; // De-structure rooms data
    return { statusProperty, data: { dataProperty, totalProperty } };
  }
  if (propertyType === "shops") {
    const { dataShops: dataProperty, totalShops: totalProperty } = data || {}; // De-structure shops data
    return { statusProperty, data: { dataProperty, totalProperty } };
  }
};
