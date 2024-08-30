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
  const uploadButtonClicked = (test) => {
    if (test === true) return;
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
      onClick={() => uploadButtonClicked(true)}
      className="flex items-center gap-[5px] rounded-[5px] px-[5px] py-[5px] text-sky-500 transition-all duration-150 hover:bg-sky-100 smallTab:border-[1px] smallTab:border-sky-500 smallTab:py-0"
    >
      <span>
        <BsDatabaseUp />
      </span>
      <span className="hidden font-semibold smallTab:block">UPLOAD DATA</span>
    </button>
  );
};

export default Uploader;
