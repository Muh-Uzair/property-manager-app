import { getAllOccupiedFlatsQt } from "@/Services/apiFlats";
import { getAllOccupiedRoomsQt } from "@/Services/apiRooms";
import { getAllOccupiedShopsQt } from "@/Services/apiShops";
import { useQuery } from "@tanstack/react-query";

export const useGetOccupiedQt = () => {
  const { data: dataAllOccupiedQt, status: statusAllOccupiedQt } = useQuery({
    queryFn: async () => {
      const occupiedFlatsQt = await getAllOccupiedFlatsQt();
      const occupiedRoomsQt = await getAllOccupiedRoomsQt();
      const occupiedShopsQt = await getAllOccupiedShopsQt();

      return (
        occupiedFlatsQt.length + occupiedRoomsQt.length + occupiedShopsQt.length
      );
    },
    queryKey: ["allOccupiedQt"],
  });

  return { dataAllOccupiedQt, statusAllOccupiedQt };
};
