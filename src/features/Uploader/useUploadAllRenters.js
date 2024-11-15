import { useMutation } from "@tanstack/react-query";
import { deleteAllRenters, uploadAllRenters } from "../../Services/apiRenters";

export const useUploadAllRenters = () => {
  const { mutate: mutateUploadAllRenters, status: statusRentersUpload } =
    useMutation({
      mutationFn: uploadAllRenters,
      onError: (error) => {
        throw new Error(`Unable to upload all renters Error => ${error}`);
      },
      onSuccess: () => {},
      onMutate: async () => {
        await deleteAllRenters();
      },
    });

  return { mutateUploadAllRenters, statusRentersUpload };
};
