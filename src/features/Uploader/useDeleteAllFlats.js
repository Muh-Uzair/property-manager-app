import { useMutation } from "@tanstack/react-query";
import { deleteAllFlats } from "../../Services/apiFlats";

export const useDeleteAllFlats = () => {
  const { mutate: mutateDeleteAllFlats, status: statusDeletingFlats } =
    useMutation({
      mutationFn: deleteAllFlats,
      onError: (error) => {
        console.error(error);
      },
    });

  return { mutateDeleteAllFlats, statusDeletingFlats };
};
