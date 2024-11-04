import { useMutation } from "@tanstack/react-query";
import {
  deleteAllRentings,
  uploadAllRentings,
} from "../../Services/apiRentings";

export const useUploadAllRentings = () => {
  const { mutate: mutateUploadAllRentings, status: statusAllRentingsUpload } =
    useMutation({
      mutationFn: uploadAllRentings,
      onError: (error) => {
        throw new error(`Unable to mutate all renting ${error}`);
      },
      onSuccess: () => {},
      onMutate: async () => {
        await deleteAllRentings();
      },
    });

  return { mutateUploadAllRentings, statusAllRentingsUpload };
};
