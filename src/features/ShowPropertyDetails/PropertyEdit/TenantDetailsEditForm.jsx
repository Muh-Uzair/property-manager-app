import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
countries.registerLocale(enLocale);
import { usePropertyEditContext } from "./usePropertyEditContext";

// FUNCTION
function checkValidCountry(countryName) {
  const countryNames = Object.values(
    countries.getNames("en", { select: "official" }),
  );

  return countryNames.includes(
    `${countryName.at(0).toUpperCase()}${countryName.slice(1)}`,
  );
}

// COMPONENT START
export default function TenantDetailsEditForm() {
  // VARIABLES
  const { register, dataPropertyEditForm } = usePropertyEditContext();

  // FUNCTIONS

  // JSX
  return (
    <FormPortion formPortionHeading="Tenant details">
      <FormItem
        itemLabel={"Name"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"name"}
        id={"name"}
        name={"name"}
        register={register}
        validationObj={{
          required: "Name is required",
          pattern: {
            value: /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/,
            message:
              "Invalid name format. Use only letters, spaces, hyphens, or apostrophes.",
          },
        }}
        placeholder={"Maria | john etc"}
        autoComplete={true}
      />

      <FormItem
        itemLabel={"Contact"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"contact_info"}
        id={"contact_info"}
        name={"contact_info"}
        register={register}
        validationObj={{
          required: "Contact information is required",
          pattern: {
            value: /^[0-9\s-]{1,20}$/,
            message:
              "Only numbers, spaces, and hyphens are allowed (max 20 characters).",
          },
        }}
        placeholder={"0331-9193878"}
      />

      <FormItem
        itemLabel={"Nationality"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"nationality"}
        id={"nationality"}
        name={"nationality"}
        register={register}
        validationObj={{
          required: "Nationality is required",
          validate: (value) => {
            return checkValidCountry(value) || "Invalid country";
          },
        }}
        placeholder={"Italy | Germany etc"}
      />

      <FormItem
        itemLabel={"Id Number"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"id_card_number"}
        id={"id_card_number"}
        name={"id_card_number"}
        register={register}
        validationObj={{
          required: "ID number is required",
          pattern: {
            value: /^[0-9-]{13,}$/, // Allows digits and '-' with a minimum length of 13
            message:
              "ID number must be at least 13 characters and can only contain digits and hyphens",
          },
        }}
        placeholder={"min 13 | only (-) allowed"}
      />

      <FormItem
        itemLabel={"Occupation"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"occupation"}
        id={"occupation"}
        name={"occupation"}
        register={register}
        validationObj={{
          required: "Occupation is required",
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Occupation can only contain letters and spaces",
          },
        }}
        placeholder={"unemployed | doctor etc"}
      />

      <FormItem
        itemLabel={"Marital Status"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"marital_status"}
        id={"marital_status"}
        name={"marital_status"}
        register={register}
        validationObj={{
          required: "Marital Status is required",
          validate: (value) => {
            return (
              value.toLowerCase() === "married" ||
              value.toLowerCase() === "unmarried" ||
              "Marital status can only be married or unmarried"
            );
          },
        }}
        placeholder={"married | unmarried"}
      />

      <FormItem
        itemLabel={"Current Image"}
        itemType={{
          type: "labelImage",
          src: `${dataPropertyEditForm?.tenantImage}`,

          readOnly: true,
        }}
        htmlFor={"tenantImage"}
      />
      <div className="grid w-full grid-cols-[100px_150px] items-center gap-[5px] text-[10px] smallTab:grid-cols-[150px_180px] smallTab:text-[14px] largeTab:grid-cols-[150px_200px] largeScreen:grid-cols-[150px_220px] largeScreen:text-[15px]">
        <label
          className="text-nowrap font-semibold"
          htmlFor="selectedTenantImage"
          style={{ color: "gray" }}
        >
          Upload Image
        </label>
        <input
          id="selectedTenantImage"
          name="selectedTenantImage"
          type="file"
          {...register("selectedTenantImage")}
        />
      </div>
    </FormPortion>
  );
  // JSX
}
// COMPONENT END
