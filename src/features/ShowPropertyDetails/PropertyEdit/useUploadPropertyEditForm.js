import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { uploadTenantEditDetails } from "../../../Services/apiRenters";
import { uploadFlatEditDetails } from "../../../Services/apiFlats";
import { uploadRoomEditDetails } from "../../../Services/apiRooms";
import { uploadShopEditDetails } from "../../../Services/apiShops";

// FUNCTION calls the actual upload function
function uploadEditDetails(data) {
  // 1 : destructure the necessary vars out of data
  const { formData, renter_id, propertyType, propertyId } = data;

  // 2 : upload tenant details according to the received id
  uploadTenantEditDetails(formData, renter_id);

  // 3 : upload property details according to the property type
  if (propertyType === "flats") {
    uploadFlatEditDetails(formData, propertyId);
  } else if (propertyType === "rooms") {
    uploadRoomEditDetails(formData, propertyId);
  } else {
    uploadShopEditDetails(formData, propertyId);
  }
}

// FUNCTION
export function useUploadPropertyEditForm() {
  // VARIABLES
  const queryClient = useQueryClient();

  // 1 : perform the mutation
  const { mutate: mutateUploadEditDetails, status: statusUploadEditDetails } =
    useMutation({
      mutationFn: uploadEditDetails,
      onError: () => {
        toast.error("Error editing property");
      },
      onSuccess: () => {
        queryClient.invalidateQueries();
        toast.success("Successfully edited property details");
      },
    });

  return { mutateUploadEditDetails, statusUploadEditDetails };
}