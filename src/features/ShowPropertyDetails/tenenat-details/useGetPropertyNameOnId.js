import { getFlatNameOnId } from "../../../Services/apiFlats";
import { getRoomNameOnId } from "../../../Services/apiRooms";
import { getShopNameOnId } from "../../../Services/apiShops";

// FUNCTION
export const useGetPropertyNameOnId = (otherRentedProperties, otherRentedPropertiesId) => {
  const { data, status } = useQuery({
    queryFn: async () => {
        otherRentedProperties.forEach((val,i )=> {
            if(val === "flat") {
                return await getFlatNameOnId(otherRentedPropertiesId(i))

            }
            if(val === "shop") {
                return await getShopNameOnId(otherRentedPropertiesId(i))

            }
            if( val === "room") {
                return await getRoomNameOnId(otherRentedPropertiesId(i))

            }
            
        });
    },
  });

  return { data, status };
};
