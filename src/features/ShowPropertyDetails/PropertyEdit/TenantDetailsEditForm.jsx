import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import { usePropertyEditContext } from "./usePropertyEditContext";

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
