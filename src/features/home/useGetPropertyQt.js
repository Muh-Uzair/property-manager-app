import { getAllOccupiedFlatsQt } from "@/Services/apiFlats";
import { getAllOccupiedRoomsQt } from "@/Services/apiRooms";
import { getAllOccupiedShopsQt } from "@/Services/apiShops";
import { useQuery } from "@tanstack/react-query";

export const useGetPropertyQt = () => {
  const {
    data: dataAllOccupiedPropertiesQt,
    status: statusAllOccupiedPropertiesQt,
  } = useQuery({
    queryFn: async () => {
      const occupiedFlatsQt = await getAllOccupiedFlatsQt();
      const occupiedRoomsQt = await getAllOccupiedRoomsQt();
      const occupiedShopsQt = await getAllOccupiedShopsQt();

      return [
        { name: "Occupied flats", value: [...occupiedFlatsQt]?.length },
        { name: "Occupied rooms", value: [...occupiedRoomsQt]?.length },
        { name: "Occupied shops", value: [...occupiedShopsQt]?.length },
      ];
    },
    queryKey: ["allOccupiedPropertiesQt"],
  });

  return { dataAllOccupiedPropertiesQt, statusAllOccupiedPropertiesQt };
};
