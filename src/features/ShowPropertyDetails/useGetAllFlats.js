import { useQuery } from "@tanstack/react-query";
import { getAllFlats } from "../../Services/apiFlats";

export const useGetAllFlats = () => {
  const { data: dataFlats, status: statusFlats } = useQuery({
    queryFn: getAllFlats,
    queryKey: ["flats"],
  });

  return { dataFlats, statusFlats };
};
