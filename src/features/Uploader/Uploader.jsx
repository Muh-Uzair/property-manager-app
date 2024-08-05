import { useUploadAllFlats } from "./useUpploadFlats";
import { flatsDataArr } from "../../data/data-flats";

// COMPONENT START///////////////////////////////////////////////
const Uploader = () => {
  // STATE & VARIABLES

  const { mutateUploadAllFlats, flatsUploadStatus } = useUploadAllFlats();

  // FUNCTIONS

  return (
    <button
      disabled={flatsUploadStatus === "pending"}
      onClick={() => mutateUploadAllFlats(flatsDataArr)}
      className="rounded-[5px] border-[1px] border-cyan-400 bg-sky-100 px-[20px] py-2 text-xl font-semibold text-cyan-500 transition hover:bg-sky-200"
    >
      Upload
    </button>
  );
};

export default Uploader;
