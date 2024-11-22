import { getAllRoomsForHome } from "@/Services/apiRooms";
import { useQuery } from "@tanstack/react-query";

export const useGetRoomsHome = () => {
  const { data: dataRoomsHome, status: statusRoomsHome } = useQuery({
    queryFn: getAllRoomsForHome,
    queryKey: ["dataRoomsHome"],
  });

  return { dataRoomsHome, statusRoomsHome };
};
