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
          value: `${dataPropertyEditForm?.name}`,
        }}
        htmlFor={"pefTenantName"}
        id={"pefTenantName"}
        name={"pefTenantName"}
        register={register}
      />

      <FormItem
        itemLabel={"Contact"}
        itemType={{
          type: "labelInputText",
          value: `${dataPropertyEditForm?.contact_info}`,
        }}
        htmlFor={"pefTenantContact"}
        id={"pefTenantContact"}
        name={"pefTenantContact"}
        register={register}
      />

      <FormItem
        itemLabel={"Nationality"}
        itemType={{
          type: "labelInputText",
          value: `${dataPropertyEditForm?.nationality}`,
        }}
        htmlFor={"pefTenantNationality"}
        id={"pefTenantNationality"}
        name={"pefTenantNationality"}
        register={register}
      />

      <FormItem
        itemLabel={"Id Number"}
        itemType={{
          type: "labelInputText",
          value: `${dataPropertyEditForm?.id_card_number}`,
        }}
        htmlFor={"pefTenantId"}
        id={"pefTenantId"}
        name={"pefTenantId"}
        register={register}
      />

      <FormItem
        itemLabel={"Occupation"}
        itemType={{
          type: "labelInputText",
          value: `${dataPropertyEditForm?.occupation}`,
        }}
        htmlFor={"pefTenantOccupation"}
        id={"pefTenantOccupation"}
        name={"pefTenantOccupation"}
        register={register}
      />

      <FormItem
        itemLabel={"Marital Status"}
        itemType={{
          type: "labelInputText",
          value: `${dataPropertyEditForm?.marital_status}`,
        }}
        htmlFor={"pefMaritalStatus"}
        id={"pefMaritalStatus"}
        name={"pefMaritalStatus"}
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
        htmlFor={"pefTenantImage"}
        id={"pefTenantImage"}
        name={"pefTenantImage"}
        register={register}
      />
    </FormPortion>
  );
  // JSX
}
// COMPONENT END
