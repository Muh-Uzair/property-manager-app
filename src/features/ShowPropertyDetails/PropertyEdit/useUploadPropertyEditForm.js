import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { uploadTenantEditDetails } from "../../../Services/apiRenters";
import { uploadFlatEditDetails } from "../../../Services/apiFlats";

// FUNCTION calls the actual upload function
async function uploadEditDetails(data) {
  // 1 : upload tenant details according to the received id
  await uploadTenantEditDetails(data?.editFormData, data?.renter_id);

  // 2 : upload property details according to the property type
  if (data?.propertyType === "flats") {
    await uploadFlatEditDetails(data?.editFormData, data?.propertyType);
  } else if (data?.propertyType === "rooms") {
    console.log("uploading property edit form data rooms");
  } else {
    console.log("uploading property edit form data shops");
  }
}

// FUNCTION
export function useUploadPropertyEditForm() {
  // 1 : perform the mutation
  const { mutate: mutateUploadEditDetails, status: statusUploadEditDetails } =
    useMutation({
      mutationFn: uploadEditDetails,
      onError: () => {
        toast.error("Error editing property");
      },
      onSuccess: () => {
        toast.success("Successfully edited property details");
      },
    });

  return { mutateUploadEditDetails, statusUploadEditDetails };
}
