import PropTypes from "prop-types";

export default function AccordionHeaderItem({
  type,
  itemLabel = "",
  labelColor = "gray",
  labelFontWeight = "semibold",
  itemValue = "",
  valueColor = "black",
  valueFontWeight = "bold",
}) {
  return (
    <div className="flex items-center justify-center gap-[5px] text-[10px] smallTab:text-[12px] largeScreen:text-[13px]">
      {type === "labelValuePair" && (
        <>
          <span
            className="text-nowrap"
            style={{
              color: labelColor,
              fontWeight:
                labelFontWeight === "semibold"
                  ? 500
                  : labelFontWeight === "bold"
                    ? 700
                    : 500,
            }}
          >
            {itemLabel}
          </span>
          <span
            className="text-nowrap"
            style={{
              color: valueColor,
              fontWeight:
                valueFontWeight === "semibold"
                  ? 500
                  : valueFontWeight === "bold"
                    ? 700
                    : 500,
            }}
          >
            {itemValue}
          </span>
        </>
      )}
    </div>
  );
}

AccordionHeaderItem.propTypes = {
  type: PropTypes.string,
  itemLabel: PropTypes.string,
  itemValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  labelColor: PropTypes.string,
  labelFontWeight: PropTypes.string,
  valueColor: PropTypes.string,
  valueFontWeight: PropTypes.string,
};
