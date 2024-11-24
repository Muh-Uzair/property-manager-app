import { useForm } from "react-hook-form";
import { useState } from "react";

import LoginForm from "./LoginForm";
import { useLogin } from "./useLogin";
import { NamePropleLogo } from "@/ui/NameLogo";

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

  // FUNCTIONS
  const authFormSubmit = async (data) => {
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
        <p className="text-[20px] font-bold">Log in to your account</p>
      </div>

      <LoginForm
        handleSubmit={handleSubmit}
        authFormSubmit={authFormSubmit}
        register={register}
        errors={errors}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        statusLogin={statusLogin}
      />
    </div>
  );
  // JSX
}
// COMPONENT END
