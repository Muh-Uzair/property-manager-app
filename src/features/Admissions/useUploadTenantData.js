import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { uploadTenantAdmissionData } from "@/Services/apiRenters";
import { admissionFlat } from "@/Services/apiFlats";
import { admissionRoom } from "@/Services/apiRooms";
import { admissionShop } from "@/Services/apiShops";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPropertyType } from "@/hooks/useGetPropertyType";

const admitTenant = async ({ newTenantData, propertyType, propertyId }) => {
  await uploadTenantAdmissionData(newTenantData, propertyType, propertyId);
  if (propertyType === "flats") {
    await admissionFlat(newTenantData, propertyId);
  } else if (propertyType === "rooms") {
    await admissionRoom(newTenantData, propertyId);
  } else if (propertyType === "shops") {
    await admissionShop(newTenantData, propertyId);
  }
};

export const useUploadTenantData = () => {
  // VARIABLES
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const propertyType = useGetPropertyType();
  const { propertyId } = useParams();

  const { mutate: mutateUploadNewTenant, status: statusUploadNewTenant } =
    useMutation({
      mutationFn: admitTenant,
      onSuccess: () => {
        queryClient.clear();
        toast.success("Admission successful");
        navigate(`/propertyDetails/${propertyType}/${propertyId}`);
      },
      onError: () => {
        toast.error("Error in admitting");
      },
    });

  return { mutateUploadNewTenant, statusUploadNewTenant };
};
