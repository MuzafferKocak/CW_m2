import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {

  //TODO global state den user bilgisinin elde edilmesi
  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;