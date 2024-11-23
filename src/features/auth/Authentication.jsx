import FormRow from "@/ui/AdmissionFormRow";
import Button from "@/ui/Button";
import FormErrorDisplay from "@/ui/FormErrorDisplay";
import { NamePropleLogo } from "@/ui/NameLogo";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa6";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0ea5e9",
    },
  },
});

// COMPONENT START
export default function Authentication() {
  // VARIABLES
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // FUNCTIONS
  const authFormSubmit = (data) => {
    console.log(data);
  };

  // JSX
  return (
    <div className="flex h-[100vh] w-[100%] flex-col items-center justify-start gap-[20px] pt-[50px] smallTab:pt-[100px] largeTab:pt-[150px]">
      <div>
        <NamePropleLogo loginForm={true} namePropleSize={"50px"} />
      </div>
      <div>
        <p className="text-[20px] font-bold">Log in to your account</p>
      </div>
      <div className="w-[300px] smallTab:w-[400px] largeTab:w-[450px] largeTab:w-[500px]">
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
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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
                  type="password"
                  className="peer w-[100%] rounded-[5px] border-[2px] bg-white py-[7px] pl-[10px] focus:border-brand-color-500 focus:outline-none"
                  {...register("password", {
                    required: "Password is requires",
                  })}
                />

                <label
                  htmlFor="password"
                  className="absolute left-[10px] top-[-12px] bg-white px-[5px] font-semibold text-gray-400 peer-focus:text-brand-color-500"
                >
                  Password
                </label>
                <button className="absolute right-[15px] top-[14px] flex items-center justify-center">
                  <FaRegEye />
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
              <Button paddingY="5px" wide={true} uppercase={true}>
                submit
              </Button>
            </FormRow>
          </form>
        </ThemeProvider>
      </div>
    </div>
  );
  // JSX
}
// COMPONENT END
