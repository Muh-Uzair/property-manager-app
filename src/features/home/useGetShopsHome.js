import { getAllShopsForHome } from "@/Services/apiShops";
import { useQuery } from "@tanstack/react-query";

export const useGetShopsHome = () => {
  const { data: dataShopsHome, status: statusShopsHome } = useQuery({
    queryFn: getAllShopsForHome,
    queryKey: ["dataShopsHome"],
  });

  return { dataShopsHome, statusShopsHome };
};
