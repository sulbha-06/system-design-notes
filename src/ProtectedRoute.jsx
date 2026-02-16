import { Navigate, Outlet } from "react-router-dom";
// this component will check if the user is authenticated before allowing access to the protected route.
function ProtectedRoute({ children }) {
  let isAuthenticated = false; // This should be replaced with actual authentication logic
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
