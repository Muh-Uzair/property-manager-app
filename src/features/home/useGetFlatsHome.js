import { useQuery } from "@tanstack/react-query";
import { getAllFlatsForHome } from "@/Services/apiFlats";

export const useGetFlatsHome = () => {
  const { data: dataFlatsHome, status: statusFlatsHome } = useQuery({
    queryFn: getAllFlatsForHome,
    queryKey: ["dataFlatsHome"],
  });

  return { dataFlatsHome, statusFlatsHome };
};
