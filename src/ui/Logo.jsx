import PropTypes from "prop-types";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { brandColor500 } from "../styles/globalStyles";

// COMPONENT START///////////////////////////////////////////////
export const Logo = ({ size = "31px" }) => {
  // STATE & VARIABLES
  const navigate = useNavigate();

  // FUNCTIONS
  // JSX//////////////////////////////////////////
  return (
    <AiFillSafetyCertificate
      style={{
        cursor: "pointer",
        border: `2px solid ${brandColor500}`,
        borderRadius: "4px",
        padding: "1px",
      }}
      size={size}
      color={brandColor500}
      onClick={() => navigate("home")}
    />
  );
  // JSX//////////////////////////////////////////
};

// Prop validation
Logo.propTypes = {
  size: PropTypes.string, // Validate that `size` is a number and is required
};
