import PropTypes from "prop-types";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";

import AdmissionFormRow from "./AdmissionFormRow";
import FormErrorDisplay from "@/ui/FormErrorDisplay";

// COMPONENT START
export default function AdmissionsFormRowOccupation({ register, errors }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <AdmissionFormRow>
      <FloatingLabelInput
        id="occupation"
        label="Occupation"
        {...register("occupation", {
          required: "Tenant occupation is required",
          minLength: {
            value: 2,
            message: "Occupation must be at least 2 characters",
          },
          maxLength: {
            value: 50,
            message: "Occupation cannot exceed 50 characters",
          },
          pattern: {
            value: /^[a-zA-Z\s]+$/, // Allows only alphabetic characters and spaces
            message: "Occupation can only contain letters and spaces",
          },
        })}
      />
      {errors.occupation && (
        <FormErrorDisplay>{`* ${errors.occupation.message}`}</FormErrorDisplay>
      )}
    </AdmissionFormRow>
  );
  // JSX
}

AdmissionsFormRowOccupation.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
// COMPONENT END
