import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login } from "@/Services/apiAuth";

export const useLogin = () => {
  //VARIABLES
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: mutateLogin, status: statusLogin } = useMutation({
    mutationFn: async ({ email, password }) => {
      const user = await login({ email, password });
      return user;
    },
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["currentUser"], user);
      toast.success("Login successful", { replace: true });
      navigate("/");
    },
    onError: () => {
      toast.error("Wrong credentials or register first", { duration: 6000 });
    },
  });

  return { mutateLogin, statusLogin };
};
