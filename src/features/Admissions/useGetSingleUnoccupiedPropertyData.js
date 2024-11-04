import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { useGetPropertyType } from "@/hooks/useGetPropertyType";
import { getFlatDataOnId } from "@/Services/apiFlats";
import { getRoomDataOnId } from "@/Services/apiRooms";
import { getShopDataOnId } from "@/Services/apiShops";

// FUNCTION
export const useGetSingleUnoccupiedPropertyData = () => {
  // VARIABLES
  const propertyType = useGetPropertyType();
  const { propertyId } = useParams();

  const { data: dataSingleUnoccupied, status: statusSingleUnoccupied } =
    useQuery({
      queryFn: async () => {
        if (propertyType === "flats") {
          const data = getFlatDataOnId(propertyId);
          return data;
        } else if (propertyType === "rooms") {
          const data = getRoomDataOnId(propertyId);
          return data;
        } else if (propertyType === "shops") {
          const data = getShopDataOnId(propertyId);
          return data;
        } else {
          throw new Error(`Invalid property type ${propertyType}`);
        }
      },

      queryKey: ["singleUnoccupiedPropertyData", propertyType],
    });

  return { dataSingleUnoccupied, statusSingleUnoccupied };
};
