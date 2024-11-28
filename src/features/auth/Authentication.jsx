import { useForm } from "react-hook-form";
import { useState } from "react";

import LoginForm from "./LoginForm";
import { useLogin } from "./useLogin";
import { NamePropleLogo } from "@/ui/NameLogo";
import { useLocation } from "react-router-dom";

// COMPONENT START
export default function Authentication() {
  // VARIABLES
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "uzair@gmail.com" } });
  const [showPassword, setShowPassword] = useState(true);
  const { mutateLogin, statusLogin } = useLogin();
  const { pathname } = useLocation();
  const registerLogin = pathname?.slice(1);

  // FUNCTIONS
  const loginFormSubmit = async (data) => {
    const { email, password } = data;
    await mutateLogin({ email, password });
  };

  // JSX
  return (
    <div className="flex h-[100vh] w-[100%] flex-col items-center justify-start gap-[20px] pt-[50px] smallTab:pt-[100px] largeTab:pt-[150px]">
      <div>
        <NamePropleLogo loginForm={true} namePropleSize={"50px"} />
      </div>

      <div>
        <p className="text-[20px] font-bold">
          {registerLogin === "login" && <>Log in to your account</>}
          {registerLogin === "register" && <>Enter details to create account</>}
        </p>
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
      {registerLogin === "register" && <span>register form</span>}
    </div>
  );
  // JSX
}
// COMPONENT END
