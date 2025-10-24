import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {
  const loc = useLocation();
  if (!user || user.isAnonymous) {
    return <Navigate to="/login" replace state={{ from: loc.pathname }} />;
  }
  return children;
}
