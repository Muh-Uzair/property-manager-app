import ErrorDisplay from "@/features/errorDisplay/ErrorDisplay";
import PropTypes from "prop-types";

// COMPONENT START
export default function ErrorFallback({ error }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return <ErrorDisplay errorMsg={error?.message} />;
  // JSX
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
