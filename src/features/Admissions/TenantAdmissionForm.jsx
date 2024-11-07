import { useForm } from "react-hook-form";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";

import Heading from "@/ui/Heading";
import AdmissionFormRow from "./AdmissionFormRow";
import FormErrorDisplay from "@/ui/FormErrorDisplay";
import HookFormSelect from "./HookFormSelect";

// COMPONENT START
export default function TenantAdmissionForm() {
  // VARIABLES
  const { register, setValue, handleSubmit, formState } = useForm();
  const { errors } = formState;

  // FUNCTIONS

  //    FUNCTION
  const admissionFormSubmit = (data) => {
    console.log(data);
  };

  const errorSubmitAdmissionForm = (errors) => {
    console.log(errors);
  };

  // JSX
  return (
    <div className="grid grid-rows-[auto_1fr] gap-[10px]">
      <div>
        <Heading type="primary">Fill the form for admission</Heading>
      </div>

      <div className="rounded-[8px] border border-brand-color-100 p-[10px]">
        <form
          onSubmit={handleSubmit(admissionFormSubmit, errorSubmitAdmissionForm)}
          className="flex flex-col gap-[10px]"
        >
          <AdmissionFormRow>
            <FloatingLabelInput
              id="name"
              label="Name"
              {...register("name", {
                required: "Tenant name is required", // Field is required
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters", // Minimum length requirement
                },
                maxLength: {
                  value: 50,
                  message: "Name cannot exceed 50 characters", // Maximum length requirement
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/, // Allows only letters and spaces
                  message: "Name can only contain letters and spaces", // Pattern error message
                },
              })}
            />
            {errors.name && (
              <FormErrorDisplay>{`* ${errors.name.message}`}</FormErrorDisplay>
            )}{" "}
            {/* Corrected here */}
          </AdmissionFormRow>

          <AdmissionFormRow>
            <FloatingLabelInput
              id="contact"
              label="Contact"
              {...register("contact", {
                required: "Tenant contact is required",
                minLength: {
                  value: 10,
                  message: "Contact must be at least 10 characters",
                },
                maxLength: {
                  value: 15,
                  message: "Contact cannot exceed 15 characters",
                },
                pattern: {
                  value: /^[0-9-]+$/, // Only allows digits and hyphens
                  message: "Contact can only contain numbers and hyphens",
                },
              })}
            />
            {errors?.contact && (
              <FormErrorDisplay>{`* ${errors.contact.message}`}</FormErrorDisplay>
            )}{" "}
            {/* Corrected here */}
          </AdmissionFormRow>

          <AdmissionFormRow>
            <FloatingLabelInput
              id="idCard"
              label="Id card"
              {...register("idCard", {
                required: "Tenant ID is required",
                minLength: {
                  value: 13,
                  message: "ID card must contain at least 13 digits",
                },
                maxLength: {
                  value: 15,
                  message: "ID card must not exceed than 15 digits",
                },
                pattern: {
                  value: /^[0-9]+$/, // Only allows digits
                  message: "ID card can only contain numbers",
                },
              })}
            />
            {errors.idCard && (
              <FormErrorDisplay>{`* ${errors.idCard.message}`}</FormErrorDisplay>
            )}
          </AdmissionFormRow>

          <AdmissionFormRow>
            <FloatingLabelInput
              id="occupation"
              label="Occupation"
              {...register("occupation", {
                required: "Tenant occupation is required",
                minLength: {
                  value: 2,
                  message: "Occupation must be at least 2 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Occupation cannot exceed 50 characters",
                },
                pattern: {
                  value: /^[a-zA-Z\s]+$/, // Allows only alphabetic characters and spaces
                  message: "Occupation can only contain letters and spaces",
                },
              })}
            />
            {errors.occupation && (
              <FormErrorDisplay>{`* ${errors.occupation.message}`}</FormErrorDisplay>
            )}
          </AdmissionFormRow>

          <AdmissionFormRow>
            <HookFormSelect
              id="nationality"
              placeholder="Select a nationality"
              {...register("nationality", {
                required: "Nationality is required",
              })}
              onValueChange={(value) =>
                setValue("nationality", value, { shouldValidate: true })
              }
            />
            {errors.nationality && (
              <FormErrorDisplay>{`* ${errors.nationality.message}`}</FormErrorDisplay>
            )}
          </AdmissionFormRow>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
  // JSX
}
// COMPONENT END

{
  /* 
          <AdmissionFormRow>
            <Select
              id="nationality"
              {...register("nationality", {
                required: "Nationality is required",
              })} 
              onValueChange={(value) =>
                setValue("nationality", value, { shouldValidate: true })
              } 
            >
              <SelectTrigger className="border border-gray-300">
                <SelectValue placeholder="Select a nationality" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{"Nationalities"}</SelectLabel>
                  <SelectItem value="art">Argentina Time (ART)</SelectItem>
                  <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                  <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                  <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.nationality && (
              <FormErrorDisplay>{`* ${errors.nationality.message}`}</FormErrorDisplay>
            )}
          </AdmissionFormRow> */
}
