// import { flatsDataArr } from "../../data/data-flats";

import toast from "react-hot-toast";
import { useUploadAllRooms } from "./useUploadAllRooms";
import { BsDatabaseUp } from "react-icons/bs";

import { roomsDataArr } from "../../data/data-rooms";
import { shopsDataArr } from "../../data/data-shops";
import { flatsDataArr } from "../../data/data-flats";
import { rentersDataArr } from "../../data/data-renters";
import { useEffect } from "react";
import { useUploadAllShops } from "./useUploadAllShops";
import { useUploadAllFlats } from "./useUploadAllFlats";
import { useUploadAllRenters } from "./useUploadAllRenters";

// COMPONENT START///////////////////////////////////////////////
function Uploader() {
  //  VARIABLES
  const { mutateUploadAllRooms, statusRoomsUpload } = useUploadAllRooms();
  const { mutateUploadAllShops, statusShopsUpload } = useUploadAllShops();
  const { mutateUploadAllFlats, statusFlatsUpload } = useUploadAllFlats();
  const { mutateUploadAllRenters, statusRentersUpload } = useUploadAllRenters();

  // FUNCTION
  const uploadButtonClicked = (test) => {
    if (test === true) return;
    mutateUploadAllRooms(roomsDataArr);
    mutateUploadAllShops(shopsDataArr);
    mutateUploadAllFlats(flatsDataArr);
    mutateUploadAllRenters(rentersDataArr);
  };

  // FUNCTION to set the uploadSuccess
  useEffect(() => {
    function displaySuccessToast() {
      toast.success("Upload success");
    }
    if (
      statusRoomsUpload === "success" &&
      statusShopsUpload === "success" &&
      statusFlatsUpload === "success" &&
      statusRentersUpload === "success"
    ) {
      displaySuccessToast();
    }

    function displayFailsToast() {
      toast("Upload Fail", {
        duration: 3000,
        position: "top-center",
        icon: <span>❌</span>,
        className: "text-red-600 font-semibold",
      });
    }

    if (
      statusRoomsUpload === "error" &&
      statusShopsUpload === "error" &&
      statusFlatsUpload === "error" &&
      statusRentersUpload === "error"
    ) {
      displayFailsToast();
    }
  }, [
    statusRoomsUpload,
    statusShopsUpload,
    statusFlatsUpload,
    statusRentersUpload,
  ]);

  return (
    <button
      disabled={
        statusRoomsUpload === "pending" ||
        statusShopsUpload === "pending" ||
        statusFlatsUpload === "pending" ||
        statusRentersUpload === "pending"
      }
      onClick={() => uploadButtonClicked(false)}
      className="flex items-center gap-[5px] rounded-[5px] border-sky-500 px-[5px] py-[5px] text-sky-500 transition-all duration-150 active:bg-brand-color-300/40 disabled:cursor-not-allowed smallTab:border-[1px] smallTab:py-0 largeScreen:hover:bg-sky-500 largeScreen:hover:text-white largeScreen:active:bg-brand-color-300/40"
    >
      <span className="text-[24px] smallTab:text-base">
        <BsDatabaseUp />
      </span>
      <span className="hidden font-semibold smallTab:block">UPLOAD DATA</span>
    </button>
  );
}

export default Uploader;
