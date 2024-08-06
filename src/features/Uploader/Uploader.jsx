// import { flatsDataArr } from "../../data/data-flats";

import { useUploadAllRooms } from "./useUploadAllRooms";
import { useUploadAllShops } from "./useUploadAllShops";
import { useUploadAllFlats } from "./useUploadAllFlats";

import { roomsDataArr } from "../../data/data-rooms";
import { shopsDataArr } from "../../data/data-shops";
import { flatsDataArr } from "../../data/data-flats";
import { useUploadAllRenters } from "./useUploadAllRenters";
import { rentersDataArr } from "../../data/data-renters";
import { useUploadAllRentings } from "./useUploadAllRentings";
import { allRentingsDataArr } from "../../data/data-allRentings";

// COMPONENT START///////////////////////////////////////////////
const Uploader = () => {
  // STATE & VARIABLES

  const { mutateUploadAllRooms, statusRoomsUpload } = useUploadAllRooms();
  const { mutateUploadAllShops, statusShopsUpload } = useUploadAllShops();
  const { mutateUploadAllFlats, statusFlatsUpload } = useUploadAllFlats();
  const { mutateUploadAllRenters, statusRentersUpload } = useUploadAllRenters();
  const { mutateUploadAllRentings, statusAllRentingsUpload } =
    useUploadAllRentings();

  // FUNCTIONS
  const uploadButtonClicked = () => {
    mutateUploadAllRooms(roomsDataArr);
    mutateUploadAllShops(shopsDataArr);
    mutateUploadAllFlats(flatsDataArr);
    mutateUploadAllRenters(rentersDataArr);
    mutateUploadAllRentings(allRentingsDataArr);
  };

  return (
    <button
      disabled={
        statusRoomsUpload === "pending" ||
        statusShopsUpload === "pending" ||
        statusFlatsUpload === "pending" ||
        statusRentersUpload === "pending" ||
        statusAllRentingsUpload === "pending"
      }
      onClick={() => uploadButtonClicked()}
      className="rounded-[5px] border-[1px] border-cyan-400 bg-sky-100 px-[20px] py-2 text-xl font-semibold text-cyan-500 transition hover:bg-sky-200"
    >
      Upload
    </button>
  );
};

export default Uploader;
