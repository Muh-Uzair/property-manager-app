import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { uploadTenantAdmissionData } from "@/Services/apiRenters";
import { admissionFlat } from "@/Services/apiFlats";
import { admissionRoom } from "@/Services/apiRooms";
import { admissionShop } from "@/Services/apiShops";

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
  const { mutate: mutateUploadNewTenant, status: statusUploadNewTenant } =
    useMutation({
      mutationFn: admitTenant,
      onSuccess: () => {
        toast.success("Admission successful");
      },
      onError: (error) => {
        console.error(error);
        toast.error("Error in admitting");
      },
    });

  return { mutateUploadNewTenant, statusUploadNewTenant };
};
