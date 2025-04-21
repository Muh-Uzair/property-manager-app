import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import supabase from "../../../supabase";

// faltu

export const useSigninTenant = () => {
  // VARS
  const [searchParams] = useSearchParams();
  const propertyType = searchParams.get("propertyType");
  const navigate = useNavigate();

  // FUNCTION
  const { mutate: mutateSignInTenant, isPending: isPendingSignInTenant } =
    useMutation({
      mutationFn: async ({ email, password }) => {
        const { data, error: dataFetchError } = await supabase
          .from(propertyType)
          .select("id, status")
          .eq("id", email)
          .eq("password", password);

        if (dataFetchError) {
          throw new Error(
            `Unable to sign in tenant Error => ${dataFetchError}`,
          );
        }

        if (
          !data ||
          data.length === 0 ||
          data[0].status !== "occupied" ||
          data.length > 1
        ) {
          throw new Error("Invalid credentials or no data found");
        }

        navigate(
          `/tenant-operation-page?propertyType=${propertyType}&propertyId=${email}`,
        );
      },
      onSuccess: () => {
        toast.success("Tenant signed in successfully", {
          duration: 6000,
        });
      },
      onError: () => {
        toast.error(
          "Unable to sign in tenant. Please check your credentials.",
          {
            duration: 6000,
          },
        );
      },
    });

  return { mutateSignInTenant, isPendingSignInTenant };
};
