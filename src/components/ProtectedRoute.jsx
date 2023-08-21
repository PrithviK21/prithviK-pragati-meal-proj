import { Navigate } from "react-router-dom";
import useAuthData from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuthData();
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
