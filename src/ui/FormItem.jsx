// FUNCTION
function getValueFormat(inputText = "") {
  const firstLetter = inputText[0]?.toUpperCase();
  const restWords = inputText?.slice(1);
  return firstLetter + restWords;
}

// COMPONENT START
export default function FormItem({
  itemType,
  itemLabel,
  labelColor = "gray",
  itemValueColor = "",
  incomeInput = false,
  htmlFor,
  id,
  register,
  name,
  controlled = false,
  controllerStVar,
  required,
  onChangeFunc,
}) {
  // VARIABLES
  const [checkControllerSt, setCheckControllerSt] = useState(false);

  // FUNCTION function to toggle checkbox st
  function checkBoxToggle(e) {
    onChangeFunc(e);
    setCheckControllerSt((checkControllerSt) => !checkControllerSt);
  }

  // FUNCTION this function will make the input controlled by providing the value att conditionally
  function makeInputControlled() {
    if (
      // this will be case if the user provide a controller st from outside
      controlled &&
      controllerStVar !== null &&
      controllerStVar !== undefined
    ) {
      if (controlled) return { value: controllerStVar };
    }
    if (
      // this will be case if the use want the the checkbox to be controlled by does not provide a st var
      controlled &&
      (controllerStVar === null || controllerStVar === undefined)
    ) {
      if (controlled)
        return { value: checkControllerSt, onChange: (e) => checkBoxToggle(e) };
    }
  }

  // FUNCTION adding the value attribute conditionally
  function addValueAtt() {
    if (itemType?.value !== undefined && itemType?.value !== null) {
      return {
        value:
          typeof itemType?.value === "number"
            ? itemType?.value
            : getValueFormat(itemType?.value),
      };
    } else {
      return {};
    }
  }

  // JSX
  return (
    <div className="grid w-full grid-cols-[100px_150px] items-center gap-[5px] text-[10px]">
      {/* label & checkbox*/}
      {itemType.type === "labelCheckBox" && (
        <>
          <label
            className="text-nowrap font-semibold"
            style={{ color: labelColor }}
            htmlFor={htmlFor}
          >
            {itemLabel}
            {required && (
              <span className="text-[15px] text-red-700">{` *`}</span>
            )}
          </label>
          <input
            type="checkbox"
            id={id}
            name={name}
            {...register(id, { required })}
            {...makeInputControlled()}
          />
        </>
      )}

      {/* label & inputText*/}
      {itemType.type === "labelInputText" && (
        <>
          <label
            className="text-nowrap font-semibold"
            style={{ color: labelColor }}
            htmlFor={htmlFor}
          >
            {itemLabel}
            {required && (
              <span className="text-[15px] text-red-700">{` *`}</span>
            )}
          </label>
          <input
            type="texts"
            className={`rounded-[3px] border border-brand-color-200 pl-[10px] font-semibold ${incomeInput ? "bg-green-200" : "bg-brand-color-200/50"}`}
            // value={`${typeof itemType?.value === "number" ? itemType?.value : getValueFormat(itemType?.value)}`}

            readOnly={itemType?.readOnly}
            style={{
              color: `${itemValueColor ? `${itemValueColor}` : "#0ea5e9"}`,
            }}
            id={id}
            name={name}
            {...register(id, { required })}
            {...addValueAtt()}
            {...makeInputControlled()}
          />
        </>
      )}
    </div>
  );
  // JSX
}

import PropTypes from "prop-types";
import { useState } from "react";

FormItem.propTypes = {
  itemType: PropTypes.object,
  itemLabel: PropTypes.string,
  labelColor: PropTypes.string,
  itemValueColor: PropTypes.string,
  incomeInput: PropTypes.bool,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
  controlled: PropTypes.bool,
  controllerStVar: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  onChangeFunc: PropTypes.func,
  required: PropTypes.bool,
};

//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
