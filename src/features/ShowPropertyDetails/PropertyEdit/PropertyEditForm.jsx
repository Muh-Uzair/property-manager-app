import PropTypes from "prop-types";

import FormButton from "../../../ui/FormButton";
import PropertyDetailsEditForm from "./PropertyDetailsEditForm";
import TenantDetailsEditForm from "./TenantDetailsEditForm";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createContext } from "react";

export const PropertyEditContext = createContext();

// COMPONENT START
export default function PropertyEditForm({ dataPropertyEditForm }) {
  // VARIABLES
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm({
    defaultValues: dataPropertyEditForm,
  });

  // FUNCTIONS

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
    <PropertyEditContext.Provider value={{ dataPropertyEditForm, register }}>
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
    </PropertyEditContext.Provider>
  );
  // JSX
}

PropertyEditForm.propTypes = {
  dataPropertyEditForm: PropTypes.object,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
