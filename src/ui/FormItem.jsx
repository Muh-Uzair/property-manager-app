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
  onChangeFunc,
  validationObj,
  disabled,
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

  // FUNCTION this function will add disabled att only if it is received
  function addDisabled() {
    if (disabled !== null && disabled !== undefined) return { disabled };
    else return {};
  }

  // JSX
  return (
    <div className="grid w-full grid-cols-[100px_150px] items-center gap-[5px] text-[10px] smallTab:grid-cols-[150px_180px] smallTab:text-[14px] largeTab:grid-cols-[150px_200px] largeScreen:grid-cols-[150px_220px] largeScreen:text-[15px]">
      {/* label & checkbox*/}
      {itemType.type === "labelCheckBox" && (
        <>
          <label
            className="text-nowrap font-semibold"
            style={{ color: labelColor }}
            htmlFor={htmlFor}
          >
            {itemLabel}
            {validationObj?.required && (
              <span className="text-[15px] text-red-700">{` *`}</span>
            )}
          </label>
          <input
            type="checkbox"
            id={id}
            name={name}
            {...register(id, { ...validationObj })}
            {...makeInputControlled()}
            {...addDisabled()}
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
            {validationObj?.required && (
              <span className="text-[15px] text-red-700">{` *`}</span>
            )}
          </label>
          <input
            type="text"
            className={`text-wrap rounded-[3px] border border-brand-color-200 pl-[10px] font-semibold ${incomeInput ? "bg-green-200" : "bg-brand-color-200/50"}`}
            readOnly={itemType?.readOnly}
            style={{
              color: `${itemValueColor ? `${itemValueColor}` : "#0ea5e9"}`,
            }}
            id={id}
            name={name}
            {...register(id, { ...validationObj })}
            {...addValueAtt()}
            {...makeInputControlled()}
          />
        </>
      )}
      {/* labelUpload */}
      {itemType.type === "labelUpload" && (
        <>
          <label
            className="text-nowrap font-semibold"
            style={{ color: labelColor }}
            htmlFor={htmlFor}
          >
            {itemLabel}
            {validationObj?.required && (
              <span className="text-[15px] text-red-700">{` *`}</span>
            )}
          </label>
          <input className="font-semibold" type="file" id={id} name={name} />
        </>
      )}
      {/* labelImage */}
      {itemType.type === "labelImage" && (
        <>
          <label
            className="text-nowrap font-semibold"
            style={{ color: labelColor }}
          >
            {itemLabel}
          </label>
          <div className="h-[70px] w-[100px] rounded-[5px] border">
            <img
              className="h-full w-full rounded-[5px] object-cover"
              src={itemType?.src}
              alt="img"
            />
          </div>
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
  validationObj: PropTypes.object,
  disabled: PropTypes.bool,
};

//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
