import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import LoadingSpinner from "@/ui/LoadingSpinner";
import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import { useGetUser } from "@/features/auth/useGetUser";

// COMPONENT START
export default function ProtectedRoutePG({ children }) {
  // VARIABLES
  const { dataUser = {}, statusUser } = useGetUser();

  const navigate = useNavigate();

  // FUNCTIONS

  //    FUNCTION
  useEffect(() => {
    const redirectToLogin = () => {
      if (
        (dataUser?.role !== "authenticated" || dataUser === null) &&
        statusUser === "success"
      ) {
        navigate("/login");
      }
    };

    redirectToLogin();
  }, [statusUser, dataUser, navigate]);

  // JSX

  if (statusUser === "pending") {
    return (
      <div className="h-[100vh] w-full">
        <LoadingWrapperCenter>
          <LoadingSpinner />
        </LoadingWrapperCenter>
      </div>
    );
  }

  if (statusUser === "success" && dataUser?.role === "authenticated") {
    return children;
  }

  // JSX
}

ProtectedRoutePG.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
// COMPONENT END
