import { AiFillSafetyCertificate } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// COMPONENT END/////////////////////////////////////////////////
// COMPONENT START///////////////////////////////////////////////
export const Logo = () => {
  // STATE & VARIABLES
  const navigate = useNavigate();

  // FUNCTIONS
  // JSX//////////////////////////////////////////
  return (
    <AiFillSafetyCertificate
      style={{
        height: "90%",
        borderRadius: "1000px",
        backgroundColor: "white",
        cursor: "pointer",
      }}
      size={"80px"}
      color="38bdf8"
      onClick={() => navigate("home")}
    />
  );
  // JSX//////////////////////////////////////////
};
