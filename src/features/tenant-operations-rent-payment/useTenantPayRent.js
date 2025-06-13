import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation, useSearchParams } from "react-router-dom";
import supabase from "../../../supabase";

// FUNCTION
const getStripeSession = async (
  propertyId,
  propertyType,
  propertyNumber,
  propertyRent,
  tenantId,
  successUrl,
) => {
  // const stripeSessionUrl = "http://localhost:3000/stripe-session"
  const stripeSessionUrl =
    "https://5-stripe-payment-prople.vercel.app/stripe-session";
  try {
    const response = await fetch(stripeSessionUrl, {
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

    console.log(data);

    return data;
  } catch (error) {
    throw new Error(`Unable to generate session`);
  }
};

// FUNCTION
const getCurrentRentDetails = async (propertyType, propertyId) => {
  try {
    const { data, error } = await supabase
      .from(propertyType)
      .select("rent_details")
      .eq("id", propertyId)
      .single();

    if (error) {
      throw new Error(`Unable to fetch rent details`);
    }

    return data?.rent_details;
  } catch (error) {
    throw new Error(`Unable to fetch currently paid months: ${error}`);
  }
};

// FUNCTION
export const useTenantPayRent = () => {
  // VARS

  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const propertyId = searchParams.get("propertyId");
  const propertyType = searchParams.get("propertyType");
  const tenantId = searchParams.get("renterId");
  const location = useLocation();

  // FUNCTION
  const { mutate: mutateTenantPayRent, isPending: pendingTenantPayRent } =
    useMutation({
      mutationFn: async ({ selectedMonths, setAmountToPay, rentAmount }) => {
        const propertyRent = rentAmount * selectedMonths.length; // total rent amount to pay
        const propertyNumber = propertyId.slice(-1);
        const protocol = window.location.protocol;
        const host = window.location.host;
        const successUrl = `${protocol}//${host}${location.pathname}${location.search}`;
        let totalSelectedMonths = selectedMonths?.length;

        if (totalSelectedMonths === 0) {
          throw new Error("Please select at least one month to pay rent");
        }

        const currentRentDetails = await getCurrentRentDetails(
          propertyType,
          propertyId,
        );

        if (!currentRentDetails) {
          throw new Error("No rent details found for this property");
        }

        console.log("currentRentDetails", currentRentDetails);

        const newArr = currentRentDetails?.map((val) => {
          if (val.paid === true) {
            return val;
          } else if (val.paid === false && totalSelectedMonths > 0) {
            totalSelectedMonths--;
            return { month: val.month, paid: true };
          } else if (val.paid === false && totalSelectedMonths === 0) {
            return { month: val.month, paid: false };
          }
        });

        console.log("newArr");
        console.log(newArr);

        if (propertyType === "flats") {
          console.log("hello");
          const { error } = await supabase
            .from("flats")
            .update({
              rent_details: newArr,
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
              rent_details: newArr,
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
              rent_details: newArr,
            })
            .eq("id", propertyId);
          if (error) {
            throw new Error(`Unable to pay rent Error => ${error}`);
          }
        }

        // DIVIDER stripe payments

        const stripeSession = await getStripeSession(
          propertyId,
          propertyType,
          propertyNumber,
          propertyRent,
          tenantId,
          successUrl,
        );

        const stripeUrl = stripeSession?.stripeSession?.url;

        setAmountToPay(0);

        if (!stripeUrl) {
          throw new Error("Unable to get stripe session url");
        }

        window.location.href = stripeUrl;
      },
      onSuccess: () => {
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
