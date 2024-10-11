import { useQuery } from "@tanstack/react-query";
import { useGetPropertyType } from "../../hooks/useGetPropertyType";
import { getAllOccupiedFlatNumbers } from "../../Services/apiFlats";
import { getAllOccupiedRoomNumbers } from "../../Services/apiRooms";
import { getAllOccupiedShopNumbers } from "../../Services/apiShops";

export function useGetOccupiedPropertyNumber() {
  // VARIABLES
  const propertyType = useGetPropertyType();

  // Fetch occupied property numbers based on property type
  const {
    data: dataOccupiedPropertyNumber,
    status: statusOccupiedPropertyNumber,
  } = useQuery({
    queryFn: async () => {
      if (propertyType === "flats") {
        return await getAllOccupiedFlatNumbers();
      }
      if (propertyType === "rooms") {
        return await getAllOccupiedRoomNumbers();
      }
      if (propertyType === "shops") {
        return await getAllOccupiedShopNumbers();
      }
    },
    queryKey: ["occupiedPropertyNumbers", propertyType],
    enabled: !!propertyType,
  });

  // Fetch tenant names only when occupied property numbers are successfully fetched
  // const { data: dataOccupiedTenantNames, status: statusOccupiedTenantNames } =
  //   useQuery({
  //     queryFn: async () => {
  //       const data = [] ;
  //       dataOcc
  //     },
  //     queryKey: ["occupiedTenantNames", propertyType],
  //     enabled:
  //       !!propertyType &&
  //       statusOccupiedPropertyNumber === "success" &&
  //       dataOccupiedPropertyNumber?.length > 0, // Only run query if the first query succeeds
  //   });

  return {
    dataOccupiedPropertyNumber,
    statusOccupiedPropertyNumber,
  };
}
