import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllFlats, getTotalFlatsQuantity } from "../../Services/apiFlats";
import { getAllShops, getTotalShopsQuantity } from "../../Services/apiShops";
import { getAllRooms, getTotalRoomsQuantity } from "../../Services/apiRooms";
import { useSearchParams } from "react-router-dom";
import { useGetPropertyType } from "../../hooks/useGetPropertyType";

const getPropertyDataOnType = async (propertyType, currPage) => {
  if (propertyType === "flats") {
    return await getAllFlats(currPage);
  }
  if (propertyType === "rooms") {
    return await getAllRooms(currPage);
  }
  if (propertyType === "shops") {
    return await getAllShops(currPage);
  }
};

export const useGetPropertyData = () => {
  // VARIABLES
  const propertyType = useGetPropertyType();
  const [searchParams] = useSearchParams();
  const currPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  let totalPropertyQuantity = null;

  // FUNCTION

  ////////////////////
  const queryClient = useQueryClient();
  const preFetchNextPg = () => {
    // pre-fetching data for currPage + 1

    if (
      currPage !== Math.ceil(totalPropertyQuantity / 10) &&
      totalPropertyQuantity !== null
    ) {
      queryClient.prefetchQuery({
        queryFn: () => getPropertyDataOnType(propertyType, currPage + 1),
        queryKey: ["propertyData", propertyType, currPage + 1],
      });
    }
  };

  // FUNCTION
  if (propertyType === "flats") {
    const callback = async () => {
      const { totalFlatsQuantity } = await getTotalFlatsQuantity();
      totalPropertyQuantity = totalFlatsQuantity;
      preFetchNextPg();
    };
    callback();
  }

  // FUNCTION
  if (propertyType === "rooms") {
    const callback = async () => {
      const { totalRoomsQuantity } = await getTotalRoomsQuantity();
      totalPropertyQuantity = totalRoomsQuantity;
      preFetchNextPg();
    };
    callback();
  }

  // FUNCTION
  if (propertyType === "shops") {
    const callback = async () => {
      const { totalRoomsQuantity } = getTotalShopsQuantity();
      totalPropertyQuantity = totalRoomsQuantity;
      preFetchNextPg();
    };
    callback();
  }
  ////////////////// All the above logic is fetch for currPage + 1 data pre-fetching

  // FUNCTION
  // getting data for currPage
  const { data, status: statusProperty } = useQuery({
    queryFn: () => getPropertyDataOnType(propertyType, currPage),
    queryKey: ["propertyData", propertyType, currPage],
  });

  // FUNCTION
  // pre-fetch data for previous page or curr page-1
  if (currPage > 1) {
    queryClient.prefetchQuery({
      queryFn: () => getPropertyDataOnType(propertyType, currPage - 1),
      queryKey: ["propertyData", propertyType, currPage - 1],
    });
  }

  // returning
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
