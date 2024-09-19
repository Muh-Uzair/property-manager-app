import { useForm } from "react-hook-form";
import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import Heading from "../../../ui/Heading";
import FormButton from "../../../ui/FormButton";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { useNavigate } from "react-router-dom";
import { useGetPropertyEditData } from "./useGetPropertyEditData";

// COMPONENT START
export default function PropertyEdit() {
  // VARIABLES
  const { register, handleSubmit } = useForm();
  const propertyType = useGetPropertyType();
  const navigate = useNavigate();
  let { dataPropertyEdit = [] } = useGetPropertyEditData();
  dataPropertyEdit = dataPropertyEdit[0] ?? [];

  console.log(dataPropertyEdit);

  // FUNCTION
  function properEditFormSubmit(data) {
    console.log(data);
  }

  // FUNCTION
  function propertyEditFormError(errors) {
    console.log(errors);
  }

  // JSX
  return (
    <div className="flex h-[100%] flex-col gap-[10px] overflow-y-scroll p-[5px]">
      <Heading type="primary">
        Edit Property :{" "}
        {`${propertyType.at(0).toUpperCase()}${propertyType.slice(1)}`}
      </Heading>
      <form
        className="rounded-[8px] border border-gray-300 px-[10px]"
        onSubmit={handleSubmit(properEditFormSubmit, propertyEditFormError)}
        id="propertyEditForm"
        name="propertyEditForm"
      >
        {/* Property Details */}
        <div>
          <FormPortion formPortionHeading="Property details">
            <FormItem
              itemLabel={"Floor"}
              itemType={{
                type: "labelInputText",
                value: `value`,

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
                value: `value`,

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
                value: `value`,

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
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"pefRent"}
              id={"pefRent"}
              name={"pefRent"}
              register={register}
            />

            <FormItem
              itemLabel={"Image"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"pefImage"}
              id={"pefImage"}
              name={"pefImage"}
              register={register}
            />
          </FormPortion>
        </div>

        {/* Tenant Details */}
        <div>
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
        </div>

        {/* buttons */}
        <div className="flex items-center justify-end gap-[10px] py-[10px] largeScreen:justify-start">
          <FormButton
            onClick={() => navigate(-1)}
            type={"button"}
            styleType={"red"}
          >
            Back
          </FormButton>
          <FormButton type={"submit"} styleType={"primary"}>
            Edit
          </FormButton>
        </div>
      </form>
    </div>
  );
  // JSX
}
// COMPONENT END
