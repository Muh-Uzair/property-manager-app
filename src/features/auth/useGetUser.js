import { apiGetCurrentUser } from "@/Services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  const { data: dataUser = {}, status: statusUser } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      return await apiGetCurrentUser();
    },
  });

  return { dataUser, statusUser };
};
