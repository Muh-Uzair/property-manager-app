import PropTypes from "prop-types";
import Heading from "./Heading";

// COMPONENT START
export default function FormPortion({
  children,
  formPortionHeading = "",
  last,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div className={last ? "" : "border-b-[1px] border-gray-200 pb-[10px]"}>
      {formPortionHeading.length > 0 && (
        <Heading type="medium">{formPortionHeading}</Heading>
      )}

      {children}
    </div>
  );
  // JSX
}

FormPortion.propTypes = {
  children: PropTypes.node,
  formPortionHeading: PropTypes.string,
  last: PropTypes.bool,
};
// COMPONENT END
