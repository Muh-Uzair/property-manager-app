import PropTypes from "prop-types";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

import FormRow from "@/ui/AdmissionFormRow";
import FormErrorDisplay from "@/ui/FormErrorDisplay";
import Button from "@/ui/Button";
import LoadingSpinner from "@/ui/LoadingSpinner";
import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0ea5e9",
    },
  },
});

// COMPONENT START
export default function LoginForm({
  handleSubmit,
  authFormSubmit,
  register,
  errors,
  showPassword,
  setShowPassword,
  statusLogin,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="w-[300px] smallTab:w-[400px] largeTab:w-[500px]">
      <ThemeProvider theme={theme}>
        <form
          onSubmit={handleSubmit(authFormSubmit)}
          className="flex w-[100%] flex-col gap-[20px] rounded-[8px] px-[15px] pb-[20px] pt-[40px] shadow-basicShadow"
        >
          <FormRow>
            <div className="relative">
              <input
                id="email"
                autoComplete="email"
                type="text"
                className="peer w-[100%] rounded-[5px] border-[2px] py-[7px] pl-[10px] focus:border-brand-color-500 focus:outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email address",
                  },
                })}
              />

              <label
                htmlFor="email"
                className="absolute left-[10px] top-[-12px] bg-white px-[5px] font-semibold text-gray-400 peer-focus:text-brand-color-500"
              >
                Email
              </label>
            </div>
            {errors.email && (
              <FormErrorDisplay>{`* ${errors.email.message}`}</FormErrorDisplay>
            )}
          </FormRow>

          <FormRow>
            <div className="relative mt-[15px]">
              <input
                id="password"
                type={showPassword ? "password" : "text"}
                className="peer w-[100%] rounded-[5px] border-[2px] bg-white py-[7px] pl-[10px] focus:border-brand-color-500 focus:outline-none"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum length of password is 6",
                  },
                })}
              />

              <label
                htmlFor="password"
                className="absolute left-[10px] top-[-12px] bg-white px-[5px] font-semibold text-gray-400 peer-focus:text-brand-color-500"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-[15px] top-[14px] flex items-center justify-center text-gray-400"
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            {errors.password && (
              <FormErrorDisplay>{`* ${errors.password.message}`}</FormErrorDisplay>
            )}
          </FormRow>

          <FormRow>
            <p className="text-[12px]">
              To register{" "}
              <span className="cursor-pointer font-semibold text-brand-color-500 underline">
                click here
              </span>
            </p>
          </FormRow>

          <FormRow>
            <Button
              submitStatus={true}
              paddingY="5px"
              wide={true}
              uppercase={true}
            >
              {statusLogin === "pending" ? (
                <div className="my-[2px]">
                  <LoadingWrapperCenter>
                    <LoadingSpinner size={20} progressColor="white" />
                  </LoadingWrapperCenter>
                </div>
              ) : (
                <span>submit </span>
              )}
            </Button>
          </FormRow>
        </form>
      </ThemeProvider>
    </div>
  );
  // JSX
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  authFormSubmit: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.object,
  showPassword: PropTypes.bool,
  setShowPassword: PropTypes.func,
  statusLogin: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END