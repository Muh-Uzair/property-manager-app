// import { flatsDataArr } from "../../data/data-flats";

import toast from "react-hot-toast";
import { useUploadAllRooms } from "./useUploadAllRooms";
import { useUploadAllShops } from "./useUploadAllShops";
import { useUploadAllFlats } from "./useUploadAllFlats";
import { BsDatabaseUp } from "react-icons/bs";

import { roomsDataArr } from "../../data/data-rooms";
import { shopsDataArr } from "../../data/data-shops";
import { flatsDataArr } from "../../data/data-flats";
import { useUploadAllRenters } from "./useUploadAllRenters";
import { rentersDataArr } from "../../data/data-renters";
import { useUploadAllRentings } from "./useUploadAllRentings";
import { allRentingsDataArr } from "../../data/data-allRentings";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";

// COMPONENT START///////////////////////////////////////////////
function Uploader() {
  //  VARIABLES
  const { mutateUploadAllRooms, statusRoomsUpload } = useUploadAllRooms();
  const { mutateUploadAllShops, statusShopsUpload } = useUploadAllShops();
  const { mutateUploadAllFlats, statusFlatsUpload } = useUploadAllFlats();
  const { mutateUploadAllRenters, statusRentersUpload } = useUploadAllRenters();
  const { mutateUploadAllRentings, statusAllRentingsUpload } =
    useUploadAllRentings();

  // FUNCTION
  const uploadButtonClicked = (test) => {
    if (test === true) return;
    mutateUploadAllRooms(roomsDataArr);
    mutateUploadAllShops(shopsDataArr);
    mutateUploadAllFlats(flatsDataArr);
    mutateUploadAllRenters(rentersDataArr);
    mutateUploadAllRentings(allRentingsDataArr);
  };

  // FUNCTION to set the uploadSuccess
  useEffect(() => {
    function displaySuccessToast() {
      toast("Upload success", {
        duration: 3000,
        position: "top-center",
        icon: <FaCheck />,
        className: "text-green-600 font-semibold",
      });
    }
    if (
      statusRoomsUpload === "success" &&
      statusShopsUpload === "success" &&
      statusFlatsUpload === "success" &&
      statusRentersUpload === "success" &&
      statusAllRentingsUpload === "success"
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
      statusRentersUpload === "error" &&
      statusAllRentingsUpload === "error"
    ) {
      displayFailsToast();
    }
  }, [
    statusRoomsUpload,
    statusShopsUpload,
    statusFlatsUpload,
    statusRentersUpload,
    statusAllRentingsUpload,
  ]);

  return (
    <button
      disabled={
        statusRoomsUpload === "pending" ||
        statusShopsUpload === "pending" ||
        statusFlatsUpload === "pending" ||
        statusRentersUpload === "pending" ||
        statusAllRentingsUpload === "pending"
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
