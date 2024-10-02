import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import { usePropertyEditContext } from "./usePropertyEditContext";

const shopsValidationObj = {
  required: "Floor is required",
  validate: (value) => {
    return (
      value === "ground" ||
      value === "basement" ||
      "Floor either ground or basement "
    );
  },
};

// COMPONENT START
export default function PropertyDetailsEditForm() {
  // VARIABLES
  const { register, dataPropertyEditForm } = usePropertyEditContext();
  const propertyType = useGetPropertyType();

  // FUNCTIONS

  // JSX
  return (
    <FormPortion formPortionHeading="Property details">
      <FormItem
        itemLabel={"Floor"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"floor"}
        id={"floor"}
        name={"floor"}
        register={register}
        validationObj={
          propertyType === "shops"
            ? shopsValidationObj
            : {
                required: "Floor is required",
                min: { value: 1, message: "Floor greater than 0" },
                max: {
                  value: 5,
                  message: "Floor less than 6",
                },
                validate: (value) => {
                  return !isNaN(value) || "Floor must be a valid number";
                },
              }
        }
        placeholder={
          propertyType === "shops" ? `ground | basement` : `1 =< Floor >= 5`
        }
      />

      <FormItem
        itemLabel={"Size"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"size"}
        id={"size"}
        name={"size"}
        register={register}
        validationObj={{
          required: "Size is required",
          pattern: {
            value: /^\d+\*\d+$/,
            message: "Invalid size format. Expected format: 10*31",
          },
          validate: (value) => {
            const [first, second] = value.split("*").map(Number); // Split and convert to numbers
            return (first > 0 && second > 0) || "Size should not have 0"; // Ensure both are greater than 0
          },
        }}
        placeholder={"Format : 10*31"}
      />

      <FormItem
        itemLabel={"Status"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"status"}
        id={"status"}
        name={"status"}
        register={register}
        validationObj={{
          required: "Status must be occupied or unoccupied",
          validate: (value) => {
            return (
              value.toLowerCase() === "occupied" ||
              value.toLowerCase() === "unoccupied" ||
              "Status must occupied or unoccupied"
            );
          },
        }}
        placeholder={"occupied | unoccupied"}
      />

      <FormItem
        itemLabel={"Rent"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"rent"}
        id={"rent"}
        name={"rent"}
        register={register}
        validationObj={{
          required: "Rent is required",
          min: { value: 1000, message: "Rent should be grater than 1000" },
          max: { value: 50000, message: "Rent should be less than 50000" },
        }}
        placeholder={"1000-50000"}
      />

      <FormItem
        itemLabel={"Current Image"}
        itemType={{
          type: "labelImage",
          src: `${dataPropertyEditForm?.propertyImage}`,

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
