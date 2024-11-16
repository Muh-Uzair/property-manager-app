import PropTypes from "prop-types";

// COMPONENT START
export default function TotalsCard({ heading, value, icon }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className="grid grid-cols-[50px_1fr] rounded-[5px] bg-brand-color-200/80 py-[5px] smallTab:gap-[10px] smallTab:px-[5px] smallTab:py-[10px]">
      <div className="flex items-center justify-center">
        <div className="rounded-full bg-brand-color-500 p-[8px] text-[17px] text-brand-color-200 smallTab:p-[10px] smallTab:text-[20px]">
          {icon}
        </div>
      </div>
      <div>
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-brand-color-500 smallTab:text-[12px]">
            {`Total ${heading}`}{" "}
          </h4>
        </div>
        <div className="font-bold text-brand-color-700 smallTab:text-[20px]">
          {value}
        </div>
      </div>
    </div>
  );
  // JSX
}

TotalsCard.propTypes = {
  heading: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
