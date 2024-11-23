import PropTypes from "prop-types";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";

import AdmissionFormRow from "../../ui/AdmissionFormRow";
import FormErrorDisplay from "@/ui/FormErrorDisplay";

// COMPONENT START
export default function AdmissionFormRowContact({ register, errors }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <AdmissionFormRow>
      <FloatingLabelInput
        id="contact"
        label="Contact"
        {...register("contact", {
          required: "Tenant contact is required",
          minLength: {
            value: 10,
            message: "Contact must be at least 10 characters",
          },
          maxLength: {
            value: 15,
            message: "Contact cannot exceed 15 characters",
          },
          pattern: {
            value: /^[0-9-]+$/, // Only allows digits and hyphens
            message: "Contact can only contain numbers and hyphens",
          },
        })}
      />
      {errors?.contact && (
        <FormErrorDisplay>{`* ${errors.contact.message}`}</FormErrorDisplay>
      )}{" "}
      {/* Corrected here */}
    </AdmissionFormRow>
  );
  // JSX
}

AdmissionFormRowContact.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
// COMPONENT END
