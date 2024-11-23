import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENT START
export default function ProtectedRoutePG({ children }) {
  // VARIABLES
  const navigate = useNavigate();
  const [isAuth] = useState(false);

  // FUNCTIONS
  useEffect(() => {
    const redirectToLogin = () => {
      if (!isAuth) {
        navigate("/login");
      }
    };
    redirectToLogin();
  }, [isAuth, navigate]);

  // JSX
  if (isAuth) {
    return <>{children}</>;
  }

  // JSX
}

ProtectedRoutePG.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
