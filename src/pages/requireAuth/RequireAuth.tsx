import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authTokenSelector } from "../../redux/reducers/authSlice";
const RequireAuth = () => {
  const token = useSelector(authTokenSelector);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
