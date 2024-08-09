import PropTypes from "prop-types";

export default function TableRowItem({ children }) {
  return <div className="flex items-center justify-center">{children}</div>;
}

TableRowItem.propTypes = {
  children: PropTypes.node.isRequired,
};
