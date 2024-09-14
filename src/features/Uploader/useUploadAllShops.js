import { useMutation } from "@tanstack/react-query";
import { uploadAllShops, deleteAllShops } from "../../Services/apiShops";

export const useUploadAllShops = () => {
  const { mutate: mutateUploadAllShops, status: statusShopsUpload } =
    useMutation({
      mutationFn: uploadAllShops,
      onError: (error) => {
        console.log(error);
      },
      onSuccess: () => {},
      onMutate: async () => {
        await deleteAllShops();
      },
    });

  return { mutateUploadAllShops, statusShopsUpload };
};
