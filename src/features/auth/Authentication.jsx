import { useForm } from "react-hook-form";
import { useState } from "react";

import LoginForm from "./LoginForm";
import { useLogin } from "./useLogin";
import { NamePropleLogo } from "@/ui/NameLogo";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SignUp from "./SignUp";
import toast from "react-hot-toast";
// import { useSigninTenant } from "./useSigninTenant";

// COMPONENT START
export default function Authentication() {
  // VARIABLES
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(true);
  const { mutateLogin, statusLogin } = useLogin();
  const { pathname } = useLocation();
  const registerLogin = pathname?.slice(1);
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("userType");
  const navigate = useNavigate();

  // FUNCTIONS
  const loginFormSubmit = async (data) => {
    const { email, password } = data;

    if (userType === "admin") {
      if (email === "admin@prople.com" && password === "admin") {
        await mutateLogin({ email, password });
      } else {
        toast.error("Invalid credentials", { duration: 6000 });
      }
    } else if (userType === "tenant") {
      navigate("/tenant-operation-page");
    }
  };

  // JSX
  return (
    <div className="flex h-[100vh] w-[100%] flex-col items-center justify-start gap-[20px] pt-[50px] smallTab:pt-[100px] largeTab:pt-[150px]">
      <div>
        <NamePropleLogo loginForm={true} namePropleSize={"50px"} />
      </div>

      <div className="">
        {registerLogin === "login" && (
          <div className="flex flex-col items-center">
            <p className="text-center text-[20px] font-bold">
              Log in to your account
            </p>

            <p className="text-center text-red-600">
              * register if you do not have an account
            </p>
          </div>
        )}
        {registerLogin === "register" && (
          <div className="flex flex-col items-center">
            <p className="text-center text-[20px] font-bold">
              Enter details to create account
            </p>

            <p className="text-center text-red-600">
              * enter a valid email as you will receive a confirmation mail
            </p>
          </div>
        )}
      </div>

      {registerLogin === "login" && (
        <LoginForm
          handleSubmit={handleSubmit}
          loginFormSubmit={loginFormSubmit}
          register={register}
          errors={errors}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          statusLogin={statusLogin}
        />
      )}
      {registerLogin === "register" && <SignUp />}
    </div>
  );
  // JSX
}
// COMPONENT END
