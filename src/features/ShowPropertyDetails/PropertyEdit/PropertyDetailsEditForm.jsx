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
        htmlFor={"pefFloor"}
        id={"pefFloor"}
        name={"pefFloor"}
        register={register}
      />

      <FormItem
        itemLabel={"Size"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"pefSize"}
        id={"pefSize"}
        name={"pefSize"}
        register={register}
      />

      <FormItem
        itemLabel={"Status"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"pefStatus"}
        id={"pefStatus"}
        name={"pefStatus"}
        register={register}
      />

      <FormItem
        itemLabel={"Rent"}
        itemType={{
          type: "labelInputText",
        }}
        htmlFor={"pefRent"}
        id={"pefRent"}
        name={"pefRent"}
        register={register}
      />

      <FormItem
        itemLabel={"Current Image"}
        itemType={{
          type: "labelImage",
          src: `${dataPropertyEditForm?.propertyImage}`,

          readOnly: true,
        }}
        register={register}
      />

      <FormItem
        itemLabel={"Upload Image"}
        itemType={{
          type: "labelUpload",
        }}
        htmlFor={"pefPropertyImage"}
        id={"pefPropertyImage"}
        name={"pefPropertyImage"}
        register={register}
      />
    </FormPortion>
  );
  // JSX
}
// COMPONENT END
