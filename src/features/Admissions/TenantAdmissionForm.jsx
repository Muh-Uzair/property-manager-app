import Select from "react-select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel
import { Controller, useForm } from "react-hook-form";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";

import Heading from "@/ui/Heading";
import AdmissionFormRow from "./AdmissionFormRow";
import FormErrorDisplay from "@/ui/FormErrorDisplay";
import { brandColor500 } from "@/styles/globalStyles";
import { Button } from "@/components/ui/button";
import { useGetAllCountries } from "./useGetAllCountries";

// COMPONENT START
export default function TenantAdmissionForm() {
  // VARIABLES
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;
  const { countries, selectedCountry, setSelectedCountry } =
    useGetAllCountries();

  // FUNCTIONS

  //    FUNCTION
  const admissionFormSubmit = (data) => {
    const selectedCountryName = selectedCountry?.label.slice(5);
    const formData = { ...data, selectedCountryName };
    console.log(formData);
  };

  // JSX
  return (
    <div className="grid grid-rows-[auto_1fr] gap-[10px]">
      <div>
        <Heading type="primary">Fill the form for admission</Heading>
      </div>

      <div className="rounded-[8px] border border-brand-color-100 p-[10px]">
        <form
          onSubmit={handleSubmit(admissionFormSubmit)}
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
            <Select
              className="z-[100]"
              menuPlacement="top"
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
              styles={{
                control: (provided, state) => ({
                  ...provided, // Keep the default styles
                  borderColor: state.isFocused ? `${brandColor500}` : "#d1d5db", // Red when focused, gray when not
                  borderWidth: "1px",
                  borderRadius: "6px", // Rounded edges
                  padding: "1px", // Adjust padding as needed
                  boxShadow: state.isFocused
                    ? `0 0 0 0px ${brandColor500}80`
                    : "none",
                }),
              }}
            />
          </AdmissionFormRow>

          <AdmissionFormRow>
            <FormControl>
              <Controller
                name="martialStatus"
                control={control}
                defaultValue="married"
                render={({ field }) => (
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="martialStatus"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <FormControlLabel
                      value="married"
                      control={
                        <Radio
                          sx={{
                            color: "#0ea5e9",
                            "&.Mui-checked": { color: "#0ea5e9" },
                          }}
                        />
                      }
                      label="Married"
                      className="h-[30px]"
                    />
                    <FormControlLabel
                      value="single"
                      control={
                        <Radio
                          sx={{
                            color: "#0ea5e9",
                            "&.Mui-checked": { color: "#0ea5e9" },
                          }}
                        />
                      }
                      label="Single"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
            {errors.martialStatus && (
              <FormErrorDisplay>{`* ${errors.martialStatus.message}`}</FormErrorDisplay>
            )}
          </AdmissionFormRow>

          <AdmissionFormRow>
            <div className="flex items-center justify-end">
              <Button
                className="border border-brand-color-500 bg-brand-color-100 text-brand-color-500 active:bg-brand-color-200 largeScreen:hover:bg-brand-color-300"
                variant="outline"
              >
                Submit
              </Button>
            </div>
          </AdmissionFormRow>
        </form>
      </div>
    </div>
  );
  // JSX
}
// COMPONENT END
