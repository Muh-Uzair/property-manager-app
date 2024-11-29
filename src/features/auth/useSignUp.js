import { apiSignUp } from "@/Services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

export const useSignUp = () => {
  // VARIABLES
  const [signUpStatus, setSignUpStatus] = useState("idle");

  const { mutate: mutateSignUp, status: mutateStatusSignUp } = useMutation({
    mutationFn: async (userData) => {
      await apiSignUp(userData);
    },
    onSuccess: () => {
      setSignUpStatus("checkMail");
    },
    onError: () => {
      toast.error(`Unable to sign up`);
    },
  });

  return { mutateSignUp, mutateStatusSignUp, signUpStatus };
};
