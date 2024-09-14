import { useMutation } from "@tanstack/react-query";
import { deleteAllFlats, uploadAllFlats } from "../../Services/apiFlats";

export const useUploadAllFlats = () => {
  const { mutate: mutateUploadAllFlats, status: statusFlatsUpload } =
    useMutation({
      mutationFn: uploadAllFlats,
      onError: (error) => {
        console.log(error);
      },
      onSuccess: () => {},
      onMutate: async () => {
        await deleteAllFlats();
      },
    });

  return { mutateUploadAllFlats, statusFlatsUpload };
};
