import AdmissionFormRow from "../../ui/AdmissionFormRow";
import FileUploadButton from "@mui/material/Button";
import PropTypes from "prop-types";
import { IoMdCloudUpload } from "react-icons/io";

import { brandColor500 } from "@/styles/globalStyles";

// COMPONENT START
export default function AdmissionFormRowImage({ register }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <AdmissionFormRow>
      <FileUploadButton
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<IoMdCloudUpload />}
        sx={{ backgroundColor: `${brandColor500}` }}
      >
        Upload image
        <input
          {...register("tenantImage")}
          accept="image/*"
          className="clip-rect(0,0,0,0) clip-path-[inset(50%)] absolute bottom-0 left-0 h-[1px] w-[1px] overflow-hidden whitespace-nowrap"
          type="file"
          multiple
        />
      </FileUploadButton>
    </AdmissionFormRow>
  );
  // JSX
}

AdmissionFormRowImage.propTypes = {
  register: PropTypes.func,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
