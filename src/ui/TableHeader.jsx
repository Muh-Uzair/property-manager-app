import PropTypes from "prop-types";

// COMPONENT START
export default function TableHeader({
  colLabels,
  colSize,
  bgColor = "#38bdf8",
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <header
      className={`grid h-[40px] w-[100%] items-center rounded-t-[8px] border-[1px] border-sky-500 text-[8px] font-semibold uppercase text-white smallTab:text-[10px]`}
      style={{
        gridTemplateColumns: `${colSize.join(" ")}`,
        backgroundColor: `${bgColor}`,
      }}
    >
      {colLabels.map((val, i) => (
        <div className="flex items-center justify-center" key={i}>
          {val}
        </div>
      ))}
    </header>
  );
  // JSX
}
// COMPONENT END

// PropTypes
TableHeader.propTypes = {
  colLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  colSize: PropTypes.arrayOf(PropTypes.string).isRequired,
  bgColor: PropTypes.arrayOf(PropTypes.string),
};
