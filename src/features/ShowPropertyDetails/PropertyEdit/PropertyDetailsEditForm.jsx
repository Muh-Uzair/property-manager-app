import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import { usePropertyEditContext } from "./usePropertyEditContext";

// COMPONENT START
export default function PropertyDetailsEditForm() {
  // VARIABLES
  const { register, dataPropertyEdit } = usePropertyEditContext();

  // FUNCTIONS

  // JSX
  return (
    <FormPortion formPortionHeading="Property details">
      <FormItem
        itemLabel={"Floor"}
        itemType={{
          type: "labelInputText",
          value: `${dataPropertyEdit?.floor}`,

          readOnly: true,
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
          value: `${dataPropertyEdit?.size} m`,

          readOnly: true,
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
          value: `${dataPropertyEdit?.status}`,

          readOnly: true,
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
          value: `${dataPropertyEdit?.rent}`,

          readOnly: true,
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
          src: `${dataPropertyEdit?.image}`,

          readOnly: true,
        }}
      />

      <FormItem
        itemLabel={"Upload Image"}
        itemType={{
          type: "labelUpload",
          readOnly: true,
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
