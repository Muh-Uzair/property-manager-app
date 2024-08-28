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
  const { data: dataSingleProperty = {} } = useQuery({
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
  // status: statusTenantDetails
  const { data: dataTenantDetails = {} } = useQuery({
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
  if (dataTenantDetails) {
    rentPropertiesArr =
      dataTenantDetails?.data?.[0]?.rent_property?.rent_property;
    propertyIdArr = dataTenantDetails?.data?.[0]?.propertyID?.property_id;
  }
  // const [rent_property] = dataTenantDetails.data[0].rent_property || [];
  // const [property_id] = dataTenantDetails.data[0].propertyID || [];

  // status: statusOtherRentedPropertiesNames,
  let { data: dataOtherRentedPropertiesNames = [] } = useQuery({
    queryFn: async () => {
      if (rentPropertiesArr.length > 1) {
        const rentedPropertiesNames = [];

        for (let i = 0; i < rentPropertiesArr?.length; i++) {
          const propertyName = await apiGetPropertyName(
            rentPropertiesArr[i],
            propertyIdArr[i],
          );

          rentedPropertiesNames.push(propertyName);
        }
        return rentedPropertiesNames;
      }
      if (rentPropertiesArr.length <= 1) {
        return [];
      }
    },
    queryKey: ["x"],
  });

  // if (Object.entries(dataSingleProperty).length > 0) {
  //   console.log("dataSingleProperty");
  //   console.log(dataSingleProperty);
  // }

  // if (dataTenantDetails && statusTenantDetails === "success") {
  //   console.log("dataTenantDetails");
  //   console.log(dataTenantDetails);
  // }

  // if (
  //   dataOtherRentedPropertiesNames &&
  //   statusOtherRentedPropertiesNames === "success"
  // ) {
  //   console.log("dataOtherRentedPropertiesNames");
  //   console.log(dataOtherRentedPropertiesNames);
  // }

  if (dataOtherRentedPropertiesNames.length === 0) {
    console.log("otherRentedProperties : false");
    console.log(dataSingleProperty);
    console.log(dataTenantDetails);
    console.log(dataOtherRentedPropertiesNames);
    // return {
    //   dataSingleProperty,
    //   dataTenantDetails,
    //   statusTenantDetails,
    //   dataOtherRentedPropertiesNames: [],
    //   statusOtherRentedPropertiesNames: null,
    // };
  }
  if (dataOtherRentedPropertiesNames.length >= 1) {
    console.log("otherRentedProperties : true");
    console.log(dataSingleProperty);
    console.log(dataTenantDetails);
    console.log(dataOtherRentedPropertiesNames);
    // return {
    //   dataSingleProperty,
    //   dataTenantDetails,
    //   statusTenantDetails,
    //   dataOtherRentedPropertiesNames,
    //   statusOtherRentedPropertiesNames,
    // };
  }

  return { dataSingleProperty };

  // return {
  //   dataSingleProperty,
  //   dataTenantDetails,
  //   statusTenantDetails,
  //   dataOtherRentedPropertiesNames,
  //   statusOtherRentedPropertiesNames,
  // };
};
