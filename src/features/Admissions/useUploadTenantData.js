import { admissionFlat } from "@/Services/apiFlats";
import { uploadNewTenantData } from "@/Services/apiRenters";
import { admissionRoom } from "@/Services/apiRooms";
import { admissionShop } from "@/Services/apiShops";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const admitTenant = async ({ newTenantData, propertyType, propertyId }) => {
  await uploadNewTenantData(newTenantData);
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
      onError: () => {
        toast.error("Error in admitting");
      },
    });

  return { mutateUploadNewTenant, statusUploadNewTenant };
};
