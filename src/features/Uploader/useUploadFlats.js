import { useMutation } from "@tanstack/react-query";
import { uploadAllFlats } from "../../Services/apiFlats";

export const useUploadAllFlats = () => {
  const { mutate: mutateUploadAllFlats, status: flatsUploadStatus } =
    useMutation({
      mutationFn: uploadAllFlats,
      onError: (error) => {
        console.error(error);
      },
    });

  return { mutateUploadAllFlats, flatsUploadStatus };
};
