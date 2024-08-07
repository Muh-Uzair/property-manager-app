import PropTypes from "prop-types";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// COMPONENT START///////////////////////////////////////////////
export const Logo = ({ size = "31px", color = "0ea5e9" }) => {
  // STATE & VARIABLES
  const navigate = useNavigate();

  // FUNCTIONS
  // JSX//////////////////////////////////////////
  return (
    <AiFillSafetyCertificate
      style={{
        cursor: "pointer",
        border: `2px solid #${color}`,
        borderRadius: "4px",
        padding: "1px",
      }}
      size={size}
      color={color}
      onClick={() => navigate("home")}
    />
  );
  // JSX//////////////////////////////////////////
};

// Prop validation
Logo.propTypes = {
  size: PropTypes.string, // Validate that `size` is a number and is required
  color: PropTypes.string,
};
