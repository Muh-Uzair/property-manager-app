import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createContext } from "react";

import FormButton from "../../../ui/FormButton";
import PropertyDetailsEditForm from "./PropertyDetailsEditForm";
import TenantDetailsEditForm from "./TenantDetailsEditForm";
import { useUploadPropertyEditForm } from "./useUploadPropertyEditForm";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";

export const PropertyEditContext = createContext();

// COMPONENT START
export default function PropertyEditForm({ dataPropertyEditForm }) {
  // VARIABLES
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm({
    defaultValues: dataPropertyEditForm,
  });
  const { mutateUploadEditDetails, statusUploadEditDetails } =
    useUploadPropertyEditForm(dataPropertyEditForm);
  const propertyType = useGetPropertyType();
  const { renter_id } = dataPropertyEditForm;
  const { propertyId } = useParams();

  // FUNCTION
  function properEditFormSubmit(formData) {
    console.log(formData);

    // 1 : remove the notifications that are on the screen
    toast.dismiss();

    // 2 : calling the upload function
    const data = { formData, propertyType, renter_id, propertyId };
    mutateUploadEditDetails(data);
  }

  // FUNCTION
  function propertyEditFormError(errors) {
    // 1 : will remove the existing toast
    toast.dismiss();

    // 2 : gets the 1st error message out of the errors object
    let firstErrorMessage = Object.values(errors)[0].message;

    // 3 : only the 1st error message id displayed
    toast.error(firstErrorMessage, { duration: 10000 });
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
          <FormButton
            type={"submit"}
            styleType={"primary"}
            disabled={statusUploadEditDetails === "pending"}
          >
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
