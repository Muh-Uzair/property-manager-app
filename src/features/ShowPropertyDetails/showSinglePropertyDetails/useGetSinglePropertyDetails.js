import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getFlatDataOnId } from "../../../Services/apiFlats";
import { getRoomDataOnId } from "../../../Services/apiRooms";
import { getShopDataOnId } from "../../../Services/apiShops";
import { getRenterDetailsOnId } from "../../../Services/apiRenters";
import { apiGetPropertyName } from "./tenantDetails/apiOtherRentedProperties";

export const useGetSinglePropertyDetails = () => {
  const { propertyType } = useParams();
  const { propertyId } = useParams();

  // 1 : get property details
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

  // 2 : get tenant details only when property data arrives
  const { data: dataTenantDetails = {}, status: statusTenantDetails } =
    useQuery({
      queryFn: async () => {
        if (dataSingleProperty) {
          const { renter_id } = dataSingleProperty.data[0];
          return await getRenterDetailsOnId(renter_id);
        }
      },
      queryKey: ["tenantDetails", dataSingleProperty?.data?.[0]?.renter_id],
    });

  // 3 : if this renter has more than 1 properties rented , so api call for other properties as well
  let rentPropertiesArr = [];
  let propertyIdArr = [];
  let tenantName = "";
  if (dataTenantDetails) {
    rentPropertiesArr =
      dataTenantDetails?.data?.[0]?.rent_property?.rent_property;
    propertyIdArr = dataTenantDetails?.data?.[0]?.propertyID?.property_id;
    tenantName = dataTenantDetails?.data?.[0]?.name;
  }
  let {
    data: dataOtherRentedPropertiesNames = [],
    status: statusOtherRentedPropertiesNames,
  } = useQuery({
    queryFn: async () => {
      if (rentPropertiesArr.length > 1) {
        const rentedPropertiesNames = [];

        for (let i = 0; i < rentPropertiesArr?.length; i++) {
          if (propertyIdArr[i] !== Number(propertyId)) {
            const propertyName = await apiGetPropertyName(
              rentPropertiesArr[i],
              propertyIdArr[i],
            );

            rentedPropertiesNames.push([
              rentPropertiesArr[i],
              propertyIdArr[i],
              propertyName,
            ]);
          }
        }
        return rentedPropertiesNames;
      }
      if (rentPropertiesArr.length <= 1) {
        return [];
      }
    },
    queryKey: [tenantName, propertyIdArr, propertyId],
  });

  return {
    dataSingleProperty,
    statusSingleProperty,
    dataTenantDetails,
    statusTenantDetails,
    dataOtherRentedPropertiesNames,
    statusOtherRentedPropertiesNames,
  };
};
