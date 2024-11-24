import { useGetUser } from "@/features/auth/useGetUser";
import LoadingSpinner from "@/ui/LoadingSpinner";
import LoadingWrapperCenter from "@/ui/LoadingWrapperCenter";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENT START
export default function ProtectedRoutePG({ children }) {
  // VARIABLES
  const { dataUser, statusUser } = useGetUser();
  const navigate = useNavigate();

  // FUNCTIONS

  //    FUNCTION
  useEffect(() => {
    const redirectToLogin = () => {
      if (dataUser?.role !== "authenticated" && statusUser !== "pending") {
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
