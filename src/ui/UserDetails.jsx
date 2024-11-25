import { brandColor500 } from "@/styles/globalStyles";
import { TbUser } from "react-icons/tb";

import Modal from "@mui/material/Modal";
import { useState } from "react";
import Button from "./Button";
import { useLogOut } from "@/features/auth/useLogOut";
import LoadingWrapperCenter from "./LoadingWrapperCenter";
import LoadingSpinner from "./LoadingSpinner";

// COMPONENT START
export const UserDetails = () => {
  // VARIABLES
  const [open, setOpen] = useState(false);
  const { mutateLogOut, statusLogOut } = useLogOut();

  // FUNCTIONS

  //    FUNCTION
  const logOutClicked = () => {
    mutateLogOut();
  };

  //    FUNCTION
  const handleOpen = () => setOpen(true);

  //    FUNCTION
  const handleClose = () => setOpen(false);

  // JSX
  return (
    <div
      className={`flex h-[30px] w-[30px] items-center justify-center rounded-full`}
      style={{ backgroundColor: `${brandColor500}` }}
    >
      <TbUser onClick={() => handleOpen()} size={"20px"} color={"white"} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <div className="h-[200px] w-[200px] bg-white">
          <Button onClick={logOutClicked}>
            {statusLogOut === "pending" && (
              <LoadingWrapperCenter>
                <LoadingSpinner />
              </LoadingWrapperCenter>
            )}
            Log out
          </Button>
        </div>
      </Modal>
    </div>
  );
};
// COMPONENT END
