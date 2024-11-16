import { getTotalFlatsQuantity } from "@/Services/apiFlats";
import { getTotalTenantsQuantity } from "@/Services/apiRenters";
import { getTotalRoomsQuantity } from "@/Services/apiRooms";
import { getTotalShopsQuantity } from "@/Services/apiShops";
import { useQuery } from "@tanstack/react-query";

// FUNCTION
export const useGetAllTotals = () => {
  const { data: dataTotals, status: statusTotals } = useQuery({
    queryFn: async () => {
      const { totalFlatsQuantity } = await getTotalFlatsQuantity();
      const { totalRoomsQuantity } = await getTotalRoomsQuantity();
      const { totalShopsQuantity } = await getTotalShopsQuantity();
      const { totalTenantsQuantity } = await getTotalTenantsQuantity();

      return [
        { dataFor: "flats", totalFlatsQuantity },
        { dataFor: "rooms", totalRoomsQuantity },
        { dataFor: "shops", totalShopsQuantity },
        { dataFor: "tenants", totalTenantsQuantity },
      ];
    },
    queryKey: ["totals"],
  });

  return { dataTotals, statusTotals };
};
