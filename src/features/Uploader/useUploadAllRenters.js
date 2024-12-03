import { useMutation } from "@tanstack/react-query";
import { deleteAllRenters, uploadAllRenters } from "../../Services/apiRenters";

export const useUploadAllRenters = () => {
  const { mutate: mutateUploadAllRenters, status: statusRentersUpload } =
    useMutation({
      mutationFn: uploadAllRenters,
      onMutate: async () => {
        await deleteAllRenters();
      },
    });

  return { mutateUploadAllRenters, statusRentersUpload };
};
