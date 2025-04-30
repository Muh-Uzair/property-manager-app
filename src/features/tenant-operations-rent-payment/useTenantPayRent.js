import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import supabase from "../../../supabase";
import { monthsArr } from "@/utils/constants";

export const useTenantPayRent = () => {
  // VARS

  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const propertyType = searchParams.get("propertyType");
  const propertyId = searchParams.get("propertyId");

  // FUNCTION
  const { mutate: mutateTenantPayRent, isPending: pendingTenantPayRent } =
    useMutation({
      mutationFn: async ({
        selectedMonths,
        unpaidRentMonths,
        setAmountToPay,
      }) => {
        if (propertyType === "flats") {
          const { error } = await supabase
            .from("flats")
            .update({
              rent_details: monthsArr.map((val, i) => {
                if (selectedMonths[i] === val) {
                  return { ...unpaidRentMonths[i], paid: true };
                }
                return { month: monthsArr[i], paid: false };
              }),
            })
            .eq("id", propertyId);

          if (error) {
            throw new Error(`Unable to pay rent Error => ${error}`);
          }
        }
        if (propertyType === "rooms") {
          const { error } = await supabase
            .from("rooms")
            .update({
              rent_details: monthsArr.map((val, i) => {
                if (selectedMonths[i] === val) {
                  return { ...unpaidRentMonths[i], paid: true };
                }
                return { month: monthsArr[i], paid: false };
              }),
            })
            .eq("id", propertyId);

          if (error) {
            throw new Error(`Unable to pay rent Error => ${error}`);
          }
        }
        if (propertyType === "shops") {
          const { error } = await supabase
            .from("shops")
            .update({
              rent_details: monthsArr.map((val, i) => {
                if (selectedMonths[i] === val) {
                  return { ...unpaidRentMonths[i], paid: true };
                }
                return { month: monthsArr[i], paid: false };
              }),
            })
            .eq("id", propertyId);
          if (error) {
            throw new Error(`Unable to pay rent Error => ${error}`);
          }
        }
        setAmountToPay(0);
      },
      onSuccess: () => {
        toast.success("Rent payment successful");
        queryClient.invalidateQueries({
          queryKey: ["rentDetails", propertyType, propertyId],
        });
      },
      onError: () => {
        toast.error("Rent payment failed");
      },
    });

  return {
    mutateTenantPayRent,
    pendingTenantPayRent,
  };
};
