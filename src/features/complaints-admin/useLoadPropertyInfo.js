import { useQuery } from "@tanstack/react-query";
import supabase from "../../../supabase";

/**
 * Determines property type based on ID range
 * @param {string|number} propertyId - The property ID
 * @returns {string} The property type ('flats', 'rooms', or 'shops')
 */
function determinePropertyType(propertyId) {
  const id = Number(propertyId);

  if (id >= 3001 && id <= 3016) {
    return "flats";
  } else if (id >= 1001 && id <= 1010) {
    return "rooms";
  } else if (id >= 2001 && id <= 2020) {
    return "shops";
  }

  return null;
}

/**
 * Custom hook to load property information based on property_id
 * @param {string|number} propertyId - The ID of the property
 */
export function useLoadPropertyInfo(propertyId) {
  const propertyType = determinePropertyType(propertyId);

  return useQuery({
    queryKey: ["property-info", propertyId],
    queryFn: async () => {
      if (!propertyId || !propertyType) return null;

      const { data, error } = await supabase
        .from(propertyType)
        .select("*")
        .eq("id", propertyId)
        .single();

      if (error) {
        throw new Error(`Error fetching property info: ${error.message}`);
      }

      // Determine the property number field based on the type
      let propertyNumber = null;
      if (propertyType === "flats") {
        propertyNumber = data.flat_number;
      } else if (propertyType === "rooms") {
        propertyNumber = data.room_number;
      } else if (propertyType === "shops") {
        propertyNumber = data.shop_number;
      }

      return {
        ...data,
        propertyType,
        propertyNumber,
      };
    },
    enabled: Boolean(propertyId), // Only run the query if propertyId is provided
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });
}
