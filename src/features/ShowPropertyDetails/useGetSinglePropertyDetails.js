import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getFlatDataOnId } from "../../Services/apiFlats";
import { getRoomDataOnId } from "../../Services/apiRooms";
import { getShopDataOnId } from "../../Services/apiShops";

export const useGetSinglePropertyDetails = () => {
  const { propertyType } = useParams();
  const { propertyId } = useParams();

  const { data: dataSingleProperty = {}, status: statusSingleProperty } =
    useQuery({
      queryFn: async () => {
        if (propertyType === "flats") {
          return await getFlatDataOnId(propertyId);
        }
        if (propertyType === "rooms") {
          return await getRoomDataOnId(propertyId);
        }
        if (propertyType === "shops") {
          return await getShopDataOnId(propertyId);
        }
      },
      queryKey: [propertyType, propertyId],
    });

  return { dataSingleProperty, statusSingleProperty };
};
