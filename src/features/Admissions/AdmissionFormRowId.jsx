import PropTypes from "prop-types";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";

import AdmissionFormRow from "../../ui/AdmissionFormRow";
import FormErrorDisplay from "@/ui/FormErrorDisplay";

// COMPONENT START
export default function AdmissionFormRowId({ register, errors }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <AdmissionFormRow>
      <FloatingLabelInput
        id="idCard"
        label="Id card"
        {...register("idCard", {
          required: "Tenant ID is required",
          minLength: {
            value: 13,
            message: "ID card must contain at least 13 digits",
          },
          maxLength: {
            value: 15,
            message: "ID card must not exceed than 15 digits",
          },
          pattern: {
            value: /^[0-9]+$/, // Only allows digits
            message: "ID card can only contain numbers",
          },
        })}
      />
      {errors.idCard && (
        <FormErrorDisplay>{`* ${errors.idCard.message}`}</FormErrorDisplay>
      )}
    </AdmissionFormRow>
  );
  // JSX
}

AdmissionFormRowId.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
// COMPONENT END
