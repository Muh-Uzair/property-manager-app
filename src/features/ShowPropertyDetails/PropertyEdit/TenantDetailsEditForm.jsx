import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
countries.registerLocale(enLocale);
import { usePropertyEditContext } from "./usePropertyEditContext";

console.log(countries.getNames("en", { select: "official" }));

// FUNCTION
function checkValidCountry(countryName) {
  const countryNames = Object.values(
    countries.getNames("en", { select: "official" }),
  );

  return countryNames.includes(countryName);
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
            value: /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
            message:
              "Invalid contact format. Expected format: (123) 456-7890, 123-456-7890, or similar.",
          },
        }}
        placeholder={"(123) | 123-456-7890 etc"}
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
        placeholder={"Italy | germany etc"}
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
      />
      <FormItem
        itemLabel={"Upload Image"}
        itemType={{
          type: "labelUpload",
        }}
      />
    </FormPortion>
  );
  // JSX
}
// COMPONENT END
