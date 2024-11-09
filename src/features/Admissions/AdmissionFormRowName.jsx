import PropTypes from "prop-types";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";

import AdmissionFormRow from "./AdmissionFormRow";
import FormErrorDisplay from "@/ui/FormErrorDisplay";

// COMPONENT START
export default function AdmissionFormRowName({ register, errors }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <AdmissionFormRow>
      <FloatingLabelInput
        id="name"
        label="Name"
        {...register("name", {
          required: "Tenant name is required", // Field is required
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters", // Minimum length requirement
          },
          maxLength: {
            value: 50,
            message: "Name cannot exceed 50 characters", // Maximum length requirement
          },
          pattern: {
            value: /^[a-zA-Z\s]*$/, // Allows only letters and spaces
            message: "Name can only contain letters and spaces", // Pattern error message
          },
        })}
      />
      {errors.name && (
        <FormErrorDisplay>{`* ${errors.name.message}`}</FormErrorDisplay>
      )}{" "}
      {/* Corrected here */}
    </AdmissionFormRow>
  );
  // JSX
}

AdmissionFormRowName.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
