import { useForm } from "react-hook-form";

import Heading from "../../../ui/Heading";
import FormButton from "../../../ui/FormButton";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { useNavigate } from "react-router-dom";
import { useGetPropertyEditData } from "./useGetPropertyEditData";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import PropertyDetailsEditForm from "./PropertyDetailsEditForm";
import { createContext } from "react";
import TenantDetailsEditForm from "./TenantDetailsEditForm";

export const PropertyEditContext = createContext();

// COMPONENT START
export default function PropertyEdit() {
  // VARIABLES
  const { register, handleSubmit } = useForm();
  const propertyType = useGetPropertyType();
  const navigate = useNavigate();
  let {
    dataPropertyEdit = [],
    dataTenantPropertyEdit = [],
    statusTenantPropertyEdit,
  } = useGetPropertyEditData();
  dataPropertyEdit = dataPropertyEdit[0] ?? [];
  dataTenantPropertyEdit = dataTenantPropertyEdit[0] ?? [];

  // FUNCTION
  function properEditFormSubmit(data) {
    console.log(data);
  }

  // FUNCTION
  function propertyEditFormError(errors) {
    console.log(errors);
  }

  // JSX
  if (statusTenantPropertyEdit === "pending") {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <PropertyEditContext.Provider
      value={{ dataPropertyEdit, dataTenantPropertyEdit, register }}
    >
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
            <PropertyDetailsEditForm />
          </div>

          {/* Tenant Details */}
          <div>
            <TenantDetailsEditForm />
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
    </PropertyEditContext.Provider>
  );
  // JSX
}
// COMPONENT END
