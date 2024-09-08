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
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="grid w-full grid-cols-[100px_150px] items-center gap-[10px] text-[11px]">
      {itemType.type === "labelCheckBox" && (
        <>
          <label
            className="text-nowrap font-semibold"
            style={{ color: labelColor }}
          >
            {itemLabel}
          </label>
          <input type="checkbox" />
        </>
      )}
      {itemType.type === "labelInputText" && (
        <>
          <label
            className="text-nowrap font-semibold"
            style={{ color: labelColor }}
            htmlFor={htmlFor}
          >
            {itemLabel}
          </label>
          <input
            type="texts"
            className={`i rounded-[3px] border border-brand-color-200 pl-[10px] font-semibold ${incomeInput ? "bg-green-200" : "bg-brand-color-200/50"}`}
            value={`${typeof itemType?.value === "number" ? itemType?.value : getValueFormat(itemType?.value)}`}
            disabled={itemType?.disabled}
            style={{
              color: `${itemValueColor ? `${itemValueColor}` : "#0ea5e9"}`,
            }}
            id={id}
          />
        </>
      )}
    </div>
  );
  // JSX
}

import PropTypes from "prop-types";

FormItem.propTypes = {
  itemType: PropTypes.object,
  itemLabel: PropTypes.string,
  labelColor: PropTypes.string,
  itemValueColor: PropTypes.string,
  incomeInput: PropTypes.bool,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
