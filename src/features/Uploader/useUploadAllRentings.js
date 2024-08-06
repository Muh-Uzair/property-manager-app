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
        console.log(error);
      },
      onSuccess: () => {
        console.log("All rentings successfully uploaded");
      },
      onMutate: async () => {
        await deleteAllRentings();
      },
    });

  return { mutateUploadAllRentings, statusAllRentingsUpload };
};
