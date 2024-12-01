import PropTypes from "prop-types";
import { TbInfoTriangle, TbUser } from "react-icons/tb";
import { useState } from "react";

import Modal from "@mui/material/Modal";
import Button from "./Button";
import LoadingWrapperCenter from "./LoadingWrapperCenter";
import LoadingSpinner from "./LoadingSpinner";
import FormRow from "./AdmissionFormRow";
import FormInputText from "./FormInputText";
import { useLogOut } from "@/features/auth/useLogOut";
import { brandColor500 } from "@/styles/globalStyles";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "@/hooks/useUpdateUser";

// COMPONENT START
export const UserDetails = ({ userNameEmail }) => {
  // VARIABLES
  const [open, setOpen] = useState(false);
  const { mutateLogOut, statusLogOut } = useLogOut();
  const { register, handleSubmit } = useForm({
    defaultValues: { ...userNameEmail },
  });
  const { mutateUpdateUser, statusUpdateUser } = useUpdateUser();

  // FUNCTIONS

  //    FUNCTION
  const logOutClicked = () => {
    mutateLogOut();
  };

  //    FUNCTION
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //    FUNCTION
  const updateUserFormSubmit = ({ userName }) => {
    mutateUpdateUser(userName);
  };

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
        <main className="flex w-[290px] flex-col gap-[10px] rounded-b rounded-t-[7px] bg-white outline-none mobileM:w-[320px]">
          <section className="flex items-center gap-[10px] rounded-t bg-brand-color-500 p-[10px] text-[18px] text-white">
            <div>
              <TbInfoTriangle />
            </div>
            <div>User details</div>
          </section>

          <section className="p-[10px]">
            <form
              onSubmit={handleSubmit(updateUserFormSubmit)}
              className="flex w-full flex-col gap-[20px]"
            >
              <FormRow>
                <FormInputText
                  id={"email"}
                  labelText={"Email"}
                  disabled={true}
                  register={register}
                />
              </FormRow>

              <FormRow>
                <FormInputText
                  id={"userName"}
                  labelText={"User Name"}
                  register={register}
                />
              </FormRow>

              <FormRow>
                <Button submitStatus={true}>
                  {statusUpdateUser === "pending" && (
                    <div className="flex gap-[10px]">
                      <div>
                        <>Update user</>
                      </div>
                      <div>
                        <LoadingWrapperCenter>
                          <LoadingSpinner progressColor="white" size={20} />
                        </LoadingWrapperCenter>
                      </div>
                    </div>
                  )}
                  {statusUpdateUser !== "pending" && <>Update user</>}{" "}
                </Button>
              </FormRow>
            </form>
          </section>

          <section className="flex justify-end gap-[10px] border-t-[1px] p-[10px]">
            <div>
              <Button onClick={handleClose} type="red">
                Cancel
              </Button>
            </div>
            <div>
              <Button onClick={logOutClicked}>
                {statusLogOut === "pending" && (
                  <div className="flex items-center justify-center gap-[10px]">
                    <div>
                      {" "}
                      <LoadingWrapperCenter>
                        <LoadingSpinner progressColor="white" size={20} />
                      </LoadingWrapperCenter>
                    </div>
                    <div>Log out</div>
                  </div>
                )}
                {statusLogOut !== "pending" && <>Log out</>}
              </Button>
            </div>
          </section>
        </main>
      </Modal>
    </div>
  );
};

UserDetails.propTypes = {
  userNameEmail: PropTypes.object,
  userId: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
