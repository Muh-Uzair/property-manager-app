import { useForm } from "react-hook-form";
import FormItem from "../../ui/FormItem";
import FormPortion from "../../ui/FormPortion";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

// COMPONENT START
export default function PropertyEdit() {
  // VARIABLES
  const { register } = useForm();

  // FUNCTIONS

  // JSX
  return (
    <div className="grid grid-rows-[auto_1fr] gap-[10px] p-[5px]">
      <Heading type="primary">Edit Property : Flats</Heading>
      <form
        className="rounded-[8px] border border-gray-300 px-[10px]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
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
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Size"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Status"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Rent"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Image"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Tenant Id"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
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
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Contact"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Nationality"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Id Number"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Occupation"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Marital Status"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />

            <FormItem
              itemLabel={"Image"}
              itemType={{
                type: "labelInputText",
                value: `value`,

                readOnly: true,
              }}
              htmlFor={"rfPropertyNumber"}
              id={"rfPropertyNumber"}
              name={"rfPropertyNumber"}
              register={register}
            />
          </FormPortion>
        </div>

        {/* buttons */}
        <div className="flex items-center justify-end gap-[10px] py-[10px]">
          <Button type="red">Cancel</Button>
          <Button type="primary">Edit</Button>
        </div>
      </form>
    </div>
  );
  // JSX
}
// COMPONENT END
