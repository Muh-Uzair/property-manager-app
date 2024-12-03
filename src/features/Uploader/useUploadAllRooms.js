import { useMutation } from "@tanstack/react-query";
import { deleteAllRooms, uploadAllRooms } from "../../Services/apiRooms";

export const useUploadAllRooms = () => {
  const { mutate: mutateUploadAllRooms, status: statusRoomsUpload } =
    useMutation({
      mutationFn: uploadAllRooms,
      onMutate: async () => {
        await deleteAllRooms();
      },
    });

  return { mutateUploadAllRooms, statusRoomsUpload };
};
