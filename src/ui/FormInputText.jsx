import PropTypes from "prop-types";
import FormErrorDisplay from "./FormErrorDisplay";

// COMPONENT START
export default function FormInputText({
  textFieldType = "labelUpNoAnimation",
  id = "",
  autoComplete = false,
  register = () => {},
  validationObject = {},
  labelText = "",
  errors = {},
  disabled = false,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX

  if (textFieldType === "labelUpNoAnimation") {
    return (
      <div>
        <div className="relative">
          <input
            id={id}
            autoComplete={autoComplete ? "on" : "off"}
            type="text"
            className="peer w-[100%] rounded-[5px] border-[2px] py-[7px] pl-[10px] focus:border-brand-color-500 focus:outline-none"
            {...register(id, { ...validationObject })}
            disabled={disabled}
          />

          <label
            htmlFor={id}
            className="absolute left-[10px] top-[-12px] bg-white px-[5px] font-semibold text-gray-400 peer-focus:text-brand-color-500"
          >
            {labelText === ""
              ? "dummyLabel"
              : `${labelText?.at(0)?.toUpperCase()}${labelText?.slice(1)}`}
          </label>
        </div>
        {errors[id] && (
          <FormErrorDisplay>{`* ${errors[id]?.message}`}</FormErrorDisplay>
        )}
      </div>
    );
  }

  // JSX
}

FormInputText.propTypes = {
  textFieldType: PropTypes.string,
  id: PropTypes.string,
  autoComplete: PropTypes.bool,
  register: PropTypes.func,
  validationObject: PropTypes.object,
  labelText: PropTypes.string,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
