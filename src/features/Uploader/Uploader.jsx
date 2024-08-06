// import { useUploadAllFlats } from "./useUploadFlats";
// import { flatsDataArr } from "../../data/data-flats";

import { useUploadAllRooms } from "./useUploadAllRooms";
import { roomsDataArr } from "../../data/data-rooms";

// import { useDeleteAllFlats } from "./useDeleteAllFlats";
// import { useEffect } from "react";

// COMPONENT START///////////////////////////////////////////////
const Uploader = () => {
  // STATE & VARIABLES

  // const { mutateUploadAllFlats, flatsUploadStatus } = useUploadAllFlats();
  // const { mutateDeleteAllFlats, statusDeletingFlats } = useDeleteAllFlats();
  const { mutateUploadAllRooms, statusRoomsUpload } = useUploadAllRooms();

  // FUNCTIONS
  const uploadButtonClicked = () => {
    console.log("clicked");
    // mutateDeleteAllFlats();
    mutateUploadAllRooms(roomsDataArr);
  };

  // useEffect(() => {
  //   const uploadAllFlats = () => {
  //     mutateUploadAllFlats(flatsDataArr);
  //   };
  //   if (statusDeletingFlats === "success") uploadAllFlats();
  // }, [statusDeletingFlats, mutateUploadAllFlats]);

  return (
    <button
      disabled={statusRoomsUpload === "pending"}
      onClick={() => uploadButtonClicked()}
      className="rounded-[5px] border-[1px] border-cyan-400 bg-sky-100 px-[20px] py-2 text-xl font-semibold text-cyan-500 transition hover:bg-sky-200"
    >
      Upload
    </button>
  );
};

export default Uploader;
