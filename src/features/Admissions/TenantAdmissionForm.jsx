// import Select from "react-select
import Select from "react-select";
import Heading from "@/ui/Heading";
import AdmissionFormRow from "./AdmissionFormRow";
import AdmissionFormRowName from "./AdmissionFormRowName";
import AdmissionFormRowContact from "./AdmissionFormRowContact";
import AdmissionFormRowId from "./AdmissionFormRowId";
import AdmissionsFormRowOccupation from "./AdmissionsFormRowOccupation";
import { Button } from "@/components/ui/button";
import { useGetAllCountries } from "./useGetAllCountries";
import AdmissionFormRowMarital from "./AdmissionFormRowMarital";
import { useForm } from "react-hook-form";
import { brandColor500 } from "@/styles/globalStyles";

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
          <AdmissionFormRowName register={register} errors={errors} />
          <AdmissionFormRowContact register={register} errors={errors} />
          <AdmissionFormRowId register={register} errors={errors} />
          <AdmissionsFormRowOccupation register={register} errors={errors} />

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
          <AdmissionFormRowMarital control={control} errors={errors} />
          <AdmissionFormRow>
            <div className="flex items-center justify-end">
              <Button
                className="border border-brand-color-500 bg-brand-color-100 text-brand-color-500 active:bg-brand-color-200 largeScreen:hover:bg-brand-color-300 largeScreen:active:bg-brand-color-200"
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
