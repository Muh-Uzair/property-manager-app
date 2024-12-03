import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { uploadTenantEditDetails } from "../../Services/apiRenters";
import { uploadFlatEditDetails } from "../../Services/apiFlats";
import { uploadRoomEditDetails } from "../../Services/apiRooms";
import { uploadShopEditDetails } from "../../Services/apiShops";
import { useGetPropertyType } from "../../hooks/useGetPropertyType";

// FUNCTION calls the actual upload function
async function uploadEditDetails(data) {
  // 1 : destructure the necessary vars out of data
  const { formData, renter_id, propertyType, propertyId } = data;

  // 2 : upload tenant details according to the received id
  await uploadTenantEditDetails(formData, renter_id);

  // 3 : upload property details according to the property type
  if (propertyType === "flats") {
    await uploadFlatEditDetails(formData, propertyId);
  } else if (propertyType === "rooms") {
    await uploadRoomEditDetails(formData, propertyId);
  } else {
    await uploadShopEditDetails(formData, propertyId);
  }
}

// FUNCTION
export function useUploadPropertyEditForm(dataPropertyEditForm) {
  // VARIABLES
  const queryClient = useQueryClient();
  const propertyType = useGetPropertyType();
  const { propertyId } = useParams();
  const { renter_id } = dataPropertyEditForm;
  const navigate = useNavigate();

  // 1 : perform the mutation
  const { mutate: mutateUploadEditDetails, status: statusUploadEditDetails } =
    useMutation({
      mutationFn: uploadEditDetails,
      onError: () => {
        toast.error("Error editing property");
      },
      onSuccess: () => {
        queryClient.invalidateQueries([
          "dataPropertyEdit",
          propertyType,
          propertyId,
        ]);
        queryClient.invalidateQueries([
          "dataPropertyEdit",
          propertyType,
          propertyId,
          renter_id,
        ]);
        toast.success("Successfully edited property details");
        queryClient.clear();
        setTimeout(
          navigate(`/propertyDetails/${propertyType}/${propertyId}`),
          1000,
        );
      },
    });

  return { mutateUploadEditDetails, statusUploadEditDetails };
}
