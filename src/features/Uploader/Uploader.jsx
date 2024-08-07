// import { flatsDataArr } from "../../data/data-flats";

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
      className="flex items-center gap-[5px] rounded-[5px] border-[1px] border-sky-500 px-[5px] text-sky-500 transition-all duration-150 hover:bg-sky-100 active:bg-sky-200/70"
    >
      <span>
        <BsDatabaseUp />
      </span>
      <span className="font-semibold">UPLOAD DATA</span>
    </button>
  );
};

export default Uploader;
