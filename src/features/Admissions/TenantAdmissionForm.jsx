import Heading from "@/ui/Heading";
import { useForm } from "react-hook-form";
import AdmissionFormRow from "./AdmissionFormRow";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";

// COMPONENT START
export default function TenantAdmissionForm() {
  // VARIABLES
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // FUNCTIONS

  //    FUNCTION
  const admissionFormSubmit = (data) => {
    console.log(data);
  };

  const errorSubmitAdmissionForm = (error) => {
    console.log(error);
  };

  // JSX
  return (
    <div className="grid grid-rows-[auto_1fr] gap-[10px]">
      <div>
        <Heading type="primary">Fill the form for admission</Heading>
      </div>

      <div className="rounded-[8px] border border-black/10 bg-gray-100 p-[10px]">
        <form
          onSubmit={handleSubmit(admissionFormSubmit, errorSubmitAdmissionForm)}
          className="flex flex-col gap-[10px]"
        >
          <AdmissionFormRow>
            <FloatingLabelInput
              id="name"
              label="Name"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <span>{errors.username.message}</span>}{" "}
          </AdmissionFormRow>

          <AdmissionFormRow>
            <FloatingLabelInput
              id="contact"
              label="Contact"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <span>{errors.username.message}</span>}{" "}
          </AdmissionFormRow>
        </form>
      </div>
    </div>
  );
  // JSX
}
// COMPONENT END
