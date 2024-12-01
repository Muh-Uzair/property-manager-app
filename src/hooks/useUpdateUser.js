import { apiUpdateUser } from "@/Services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateUser = () => {
  // VARIABLES
  const queryClient = useQueryClient();

  const { mutate: mutateUpdateUser, status: statusUpdateUser } = useMutation({
    mutationFn: async (userName) => {
      await apiUpdateUser(userName);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["currentUser"]);
      toast.success("User updated");
    },
    onError: () => {
      toast.error("Unable to update user");
    },
  });

  return { mutateUpdateUser, statusUpdateUser };
};
