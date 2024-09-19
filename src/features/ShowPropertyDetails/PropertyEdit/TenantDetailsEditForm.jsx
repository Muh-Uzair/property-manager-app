import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import { usePropertyEditContext } from "./usePropertyEditContext";

// COMPONENT START
export default function TenantDetailsEditForm() {
  // VARIABLES
  const { register } = usePropertyEditContext();

  // FUNCTIONS

  // JSX
  return (
    <FormPortion formPortionHeading="Tenant details">
      <FormItem
        itemLabel={"Name"}
        itemType={{
          type: "labelInputText",
          value: `value`,

          readOnly: true,
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
          value: `value`,

          readOnly: true,
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
          value: `value`,

          readOnly: true,
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
          value: `value`,

          readOnly: true,
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
          value: `value`,

          readOnly: true,
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
          value: `value`,

          readOnly: true,
        }}
        htmlFor={"pefMaritalStatus"}
        id={"pefMaritalStatus"}
        name={"pefMaritalStatus"}
        register={register}
      />

      <FormItem
        itemLabel={"Image"}
        itemType={{
          type: "labelInputText",
          value: `value`,

          readOnly: true,
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
