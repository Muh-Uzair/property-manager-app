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
    <div
      className={`${last ? "" : "border-b-[1px] border-gray-200"} relative flex flex-col gap-[7px] py-[10px]`}
    >
      {formPortionHeading.length > 0 && (
        <Heading uppercase={true} type="medium">
          {formPortionHeading}
        </Heading>
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
