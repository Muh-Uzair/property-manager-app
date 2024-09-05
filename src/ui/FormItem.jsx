// COMPONENT START
export default function FormItem({ itemType, itemLabel, labelColor = "gray" }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="mb-[5px] grid grid-cols-[80px_150px] items-center gap-[5px]">
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
          >
            {itemLabel}
          </label>
          <input
            type="texts"
            className="rounded border border-brand-color-200 bg-brand-color-200/50 pl-[10px] font-semibold text-brand-color-500"
            value={itemType?.value}
            disabled={itemType?.disabled}
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
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
