import { apiGetCurrentUser } from "@/Services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  const { data: dataUser, status: statusUser } = useQuery({
    queryFn: async () => {
      const data = await apiGetCurrentUser();
      return data;
    },
    queryKey: ["currentUser"],
  });

  return { dataUser, statusUser };
};
