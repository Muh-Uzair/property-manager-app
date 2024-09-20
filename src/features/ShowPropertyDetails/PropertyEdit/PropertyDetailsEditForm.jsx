import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import { usePropertyEditContext } from "./usePropertyEditContext";

// COMPONENT START
export default function PropertyDetailsEditForm() {
  // VARIABLES
  const { register, dataPropertyEditForm } = usePropertyEditContext();

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
