import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllOccupiedFlats } from "../../../Services/apiFlats";
import { getAllOccupiedRooms } from "../../../Services/apiRooms";
import { getAllOccupiedShops } from "../../../Services/apiShops";
import { getRenterOnID } from "../../../Services/apiRenters";

export function useGetAllOccupiedProperty() {
  let { propertyType } = useParams();
  if (!propertyType) propertyType = "flats";

  const { data: dataOccupiedProperty = [], status: statusOccupiedProperty } =
    useQuery({
      queryFn: async () => {
        if (propertyType === "flats") {
          const data = await getAllOccupiedFlats();
          return data;
        } else if (propertyType === "rooms") {
          const data = await getAllOccupiedRooms();
          return data;
        } else if (propertyType === "shops") {
          const data = await getAllOccupiedShops();
          return data;
        }
      },
      queryKey: ["occupiedProperty", `${propertyType}`],
    });

  // if dataOccupiedProperty has arrived than get the tenant name

  const { data: dataTenantNamesArr = [], status: statusTenantNamesArr } =
    useQuery({
      queryFn: async () => {
        if (dataOccupiedProperty?.length > 0) {
          let tenantNamesArr = [];
          for (let i = 0; i < dataOccupiedProperty?.length; i++) {
            let tenantName = "";
            tenantName = await getRenterOnID(dataOccupiedProperty[i].renter_id);
            if (tenantName) {
              tenantNamesArr.push(tenantName);
            }
          }

          return tenantNamesArr;
        } else return [];
      },
      queryKey: [propertyType, "tenantNames", statusOccupiedProperty],
    });

  return {
    dataOccupiedProperty,
    statusOccupiedProperty,
    dataTenantNamesArr,
    statusTenantNamesArr,
  };
}
