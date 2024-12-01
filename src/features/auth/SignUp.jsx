import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { TbInfoTriangle } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import FormRow from "@/ui/AdmissionFormRow";
import Button from "@/ui/Button";
import FormInputText from "@/ui/FormInputText";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { useSignUp } from "./useSignUp";

// COMPONENT START
export default function SignUp() {
  // VARIABLES
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const { mutateSignUp, mutateStatusSignUp, signUpStatus } = useSignUp();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // FUNCTIONS

  //     FUNCTION
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/login");
  };

  //     FUNCTION
  const registerFormSubmit = (data) => {
    // trimming all the data from the fields
    const trimmedData = {};
    for (const i of Object.keys(data)) {
      if (typeof data[i] === "string") {
        trimmedData[i] = data[i]?.trim();
      } else {
        trimmedData[i] = data[i];
      }
    }

    // running mutation
    mutateSignUp(data);
  };

  //     FUNCTION
  useEffect(() => {
    const handleOpenModal = () => {
      handleOpen();
    };

    if (signUpStatus === "checkMail") {
      handleOpenModal();
    }
  }, [signUpStatus]);

  // JSX
  if (signUpStatus === "checkMail") {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center px-[10px]"
      >
        <main className="grid max-w-[320px] grid-rows-[50px_100px_50px] gap-[10px] rounded bg-white">
          <section className="flex items-center gap-[10px] bg-brand-color-500 p-[10px] text-[18px] text-white">
            <div>
              <TbInfoTriangle />
            </div>
            <div>Informational message</div>
          </section>

          <section className="p-[10px]">
            <p className="text-stone-500">
              Please check your inbox. If the email address you entered is
              correct, you will receive a confirmation email shortly.
            </p>
          </section>

          <section className="flex justify-end border-t-[1px] p-[10px]">
            <Button
              onClick={() => {
                handleClose();
                navigate("/login");
              }}
              type="red"
              uppercase={true}
            >
              cancel
            </Button>
          </section>
        </main>
      </Modal>
    );
  }
  return (
    <div className="w-[300px] smallTab:w-[400px] largeTab:w-[500px]">
      {" "}
      <form
        className="flex w-[100%] flex-col gap-[20px] rounded-[8px] px-[15px] pb-[20px] pt-[40px] shadow-basicShadow"
        onSubmit={handleSubmit(registerFormSubmit)}
      >
        <FormRow>
          <FormInputText
            textFieldType={"labelUpNoAnimation"}
            id={"userName"}
            register={register}
            validationObject={{
              required: "Username is required",
              validate: {
                length: (value) =>
                  value.length >= 3 && value.length <= 20
                    ? true
                    : "Username must be between 3 and 20 characters",
                format: (value) =>
                  /^[a-zA-Z0-9.]+$/.test(value)
                    ? true
                    : "Username can only contain alphanumeric characters and no empty space at start or end",
                singleDot: (value) =>
                  /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?$/.test(value)
                    ? true
                    : "Username cannot start or end with a dot, and only one dot is allowed",
              },
            }}
            labelText="User Name"
            errors={errors}
          />
        </FormRow>

        <FormRow>
          <FormInputText
            textFieldType={"labelUpNoAnimation"}
            id={"email"}
            register={register}
            validationObject={{
              required: "Email is required",
              validate: {
                length: (value) =>
                  value.length >= 5 && value.length <= 50
                    ? true
                    : "Email must be between 5 and 50 characters",
                pattern: (value) =>
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
                    ? true
                    : "Enter a valid email address",
              },
            }}
            labelText="email"
            errors={errors}
          />
        </FormRow>

        <FormRow>
          <FormInputText
            textFieldType={"labelUpNoAnimation"}
            id={"password"}
            register={register}
            validationObject={{
              required: "Password is required",
              validate: {
                length: (value) =>
                  value.length >= 8 && value.length <= 20
                    ? true
                    : "Password must be between 8 and 20 characters",
                containsNumber: (value) =>
                  /\d/.test(value)
                    ? true
                    : "Password must include at least one number",
                containsLetter: (value) =>
                  /[a-zA-Z]/.test(value)
                    ? true
                    : "Password must include at least one letter",
                containsSpecialChar: (value) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(value)
                    ? true
                    : "Password must include at least one special character",
              },
            }}
            labelText="password"
            errors={errors}
          />
        </FormRow>

        <FormRow>
          <FormInputText
            textFieldType={"labelUpNoAnimation"}
            id={"confirmPassword"}
            register={register}
            validationObject={{
              required: "Confirm password",
              validate: (value) =>
                value === getValues("password") || "Passwords must match",
            }}
            labelText="Confirm Password"
            errors={errors}
          />
        </FormRow>

        <FormRow>
          <Button
            submitStatus={true}
            paddingY="5px"
            wide={true}
            uppercase={true}
          >
            {mutateStatusSignUp === "pending" && (
              <div className="flex items-center justify-center gap-[10px]">
                <div className="flex items-center justify-center">
                  <LoadingSpinner size={20} progressColor="white" />
                </div>
                <div>register</div>
              </div>
            )}
            {mutateStatusSignUp !== "pending" && <>register</>}
          </Button>
        </FormRow>
      </form>
    </div>
  );
  // JSX
}
// COMPONENT END
