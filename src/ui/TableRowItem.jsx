import PropTypes from "prop-types";

export default function TableRowItem({ children }) {
  return (
    <div className="flex items-center justify-center gap-[5px]">{children}</div>
  );
}

TableRowItem.propTypes = {
  children: PropTypes.node.isRequired,
};
