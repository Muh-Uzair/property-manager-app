import { apiLogOut } from "@/Services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  // VARIABLES
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: mutateLogOut, status: statusLogOut } = useMutation({
    mutationFn: async () => {
      await apiLogOut();
    },
    onSuccess: () => {
      queryClient.clear();
      navigate("/login-as", { replace: true });
    },
    onError: () => {
      toast.error("Unable to log out");
    },
  });

  return { mutateLogOut, statusLogOut };
};
