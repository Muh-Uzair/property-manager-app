import FormRow from "@/ui/AdmissionFormRow";
import Button from "@/ui/Button";
import FormInputText from "@/ui/FormInputText";
import { useForm } from "react-hook-form";

// COMPONENT START
export default function SignUp() {
  // VARIABLES
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  // FUNCTIONS
  const registerFormSubmit = (data) => {
    const trimmedData = {};
    for (const i of Object.keys(data)) {
      if (typeof data[i] === "string") {
        trimmedData[i] = data[i]?.trim();
      } else {
        trimmedData[i] = data[i];
      }
    }

    console.log(trimmedData);
  };

  // JSX
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
            register
          </Button>
        </FormRow>
      </form>
    </div>
  );
  // JSX
}
// COMPONENT END
