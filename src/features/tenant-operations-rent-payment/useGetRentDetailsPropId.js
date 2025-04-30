import { useQuery } from "@tanstack/react-query";
import supabase from "../../../supabase";

export const useGetRentDetailsPropId = (propertyType, propertyId) => {
  return useQuery({
    queryKey: ["rentDetails", propertyType, propertyId],
    queryFn: async () => {
      let data = [];
      let rent = 0;

      if (propertyType === "flats") {
        const { data: flats, error } = await supabase
          .from("flats")
          .select("rent_details, rent")
          .eq("id", propertyId);

        if (error) {
          throw new Error(`Unable to fetch rent details Error => ${error}`);
        }

        data = flats?.[0]?.rent_details;
        rent = flats?.[0]?.rent;
      }
      if (propertyType === "rooms") {
        const { data: rooms, error } = await supabase
          .from("rooms")
          .select("rent_details, rent")
          .eq("id", propertyId);

        if (error) {
          throw new Error(`Unable to fetch rent details Error => ${error}`);
        }

        data = rooms?.[0]?.rent_details;
        rent = rooms?.[0]?.rent;
      }
      if (propertyType === "shops") {
        const { data: shops, error } = await supabase
          .from("shops")
          .select("rent_details, rent")
          .eq("id", propertyId);

        if (error) {
          throw new Error(`Unable to fetch rent details Error => ${error}`);
        }

        data = shops?.[0]?.rent_details;
        rent = shops?.[0]?.rent;
      }

      const currMonth = Number(new Date().getMonth()) + 1;

      data = data.filter((val, i) => {
        if (i < currMonth) {
          return val.paid !== true;
        }
      });

      return { data, rent };
    },
  });
};
