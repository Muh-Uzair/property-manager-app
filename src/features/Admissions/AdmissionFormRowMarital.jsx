import Radio from "@mui/material/Radio";
import PropTypes from "prop-types";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";

import FormErrorDisplay from "@/ui/FormErrorDisplay";
import AdmissionFormRow from "../../ui/AdmissionFormRow";

// COMPONENT START
export default function AdmissionFormRowMarital({ control, errors }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <AdmissionFormRow>
      <FormControl>
        <Controller
          name="martialStatus"
          control={control}
          defaultValue="married"
          render={({ field }) => (
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="martialStatus"
              value={field.value}
              onChange={field.onChange}
            >
              <FormControlLabel
                value="married"
                control={
                  <Radio
                    sx={{
                      color: "#0ea5e9",
                      "&.Mui-checked": { color: "#0ea5e9" },
                    }}
                  />
                }
                label="Married"
                className="h-[30px]"
              />
              <FormControlLabel
                value="single"
                control={
                  <Radio
                    sx={{
                      color: "#0ea5e9",
                      "&.Mui-checked": { color: "#0ea5e9" },
                    }}
                  />
                }
                label="Single"
              />
            </RadioGroup>
          )}
        />
      </FormControl>
      {errors.martialStatus && (
        <FormErrorDisplay>{`* ${errors.martialStatus.message}`}</FormErrorDisplay>
      )}
    </AdmissionFormRow>
  );
  // JSX
}

AdmissionFormRowMarital.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
