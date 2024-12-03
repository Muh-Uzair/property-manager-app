import { getFlatNameOnId } from "@/Services/apiFlats";
import { getRoomNameOnId } from "@/Services/apiRooms";
import { getShopNameOnId } from "@/Services/apiShops";

// FUNCTION
export const apiGetPropertyName = async (propertyType, propertyId) => {
  let propertyName = "";

  if (propertyType === "flat") {
    propertyName = await getFlatNameOnId(propertyId);
  }
  if (propertyType === "room") {
    propertyName = await getRoomNameOnId(propertyId);
  }
  if (propertyType === "shop") {
    propertyName = await getShopNameOnId(propertyId);
  }

  if (propertyType === "flat") {
    return propertyName[0].flat_number;
  }
  if (propertyType === "room") {
    return propertyName[0].room_number;
  }
  if (propertyType === "shop") {
    return propertyName[0].shop_number;
  }
};
