import PropTypes from "prop-types";

export default function TableListRow({ children, colSizes }) {
  return (
    <div
      className={`grid h-[100%] w-[100%] gap-[5px]`}
      style={{ gridTemplateColumns: colSizes }}
    >
      {children}
    </div>
  );
}

TableListRow.propTypes = {
  children: PropTypes.node,
  colSizes: PropTypes.string,
};
