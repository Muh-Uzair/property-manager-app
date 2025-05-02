import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation, useSearchParams } from "react-router-dom";
// import supabase from "../../../supabase";
// import { monthsArr } from "@/utils/constants";

// FUNCTION
const getStripeSession = async (
  propertyId,
  propertyType,
  propertyNumber,
  propertyRent,
  tenantId,
  successUrl,
) => {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/pay-rent", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "uzair",
        propertyId,
        propertyType,
        propertyNumber,
        propertyRent,
        tenantId,
        successUrl,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Unable to generate session`);
  }
};

export const useTenantPayRent = () => {
  // VARS

  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const propertyId = searchParams.get("propertyId");
  const propertyType = searchParams.get("propertyType");
  const tenantId = searchParams.get("renterId");
  const location = useLocation();

  console.log(location);

  // FUNCTION
  const { mutate: mutateTenantPayRent, isPending: pendingTenantPayRent } =
    useMutation({
      mutationFn: async ({
        selectedMonths,
        unpaidRentMonths,
        setAmountToPay,
        rentAmount,
      }) => {
        const propertyRent = rentAmount * selectedMonths.length;
        const propertyNumber = propertyId.slice(-1);
        const protocol = window.location.protocol;
        const host = window.location.host;
        const successUrl = `${protocol}//${host}${location.pathname}${location.search}`;

        console.log("selectedMonths", selectedMonths);
        console.log("unpaidRentMonths", unpaidRentMonths);

        const stripeSession = await getStripeSession(
          propertyId,
          propertyType,
          propertyNumber,
          propertyRent,
          tenantId,
          successUrl,
        );

        const stripeUrl = stripeSession?.data?.stripeSession?.url;

        console.log(stripeUrl);

        // if (propertyType === "flats") {
        //   const { error } = await supabase
        //     .from("flats")
        //     .update({
        //       rent_details: monthsArr.map((val, i) => {
        //         if (selectedMonths[i] === val) {
        //           return { ...unpaidRentMonths[i], paid: true };
        //         }
        //         return { month: monthsArr[i], paid: false };
        //       }),
        //     })
        //     .eq("id", propertyId);
        //   if (error) {
        //     throw new Error(`Unable to pay rent Error => ${error}`);
        //   }
        // }
        // if (propertyType === "rooms") {
        //   const { error } = await supabase
        //     .from("rooms")
        //     .update({
        //       rent_details: monthsArr.map((val, i) => {
        //         if (selectedMonths[i] === val) {
        //           return { ...unpaidRentMonths[i], paid: true };
        //         }
        //         return { month: monthsArr[i], paid: false };
        //       }),
        //     })
        //     .eq("id", propertyId);
        //   if (error) {
        //     throw new Error(`Unable to pay rent Error => ${error}`);
        //   }
        // }
        // if (propertyType === "shops") {
        //   const { error } = await supabase
        //     .from("shops")
        //     .update({
        //       rent_details: monthsArr.map((val, i) => {
        //         if (selectedMonths[i] === val) {
        //           return { ...unpaidRentMonths[i], paid: true };
        //         }
        //         return { month: monthsArr[i], paid: false };
        //       }),
        //     })
        //     .eq("id", propertyId);
        //   if (error) {
        //     throw new Error(`Unable to pay rent Error => ${error}`);
        //   }
        // }
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
