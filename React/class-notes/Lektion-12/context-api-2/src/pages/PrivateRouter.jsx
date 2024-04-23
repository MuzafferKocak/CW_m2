// import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useLoginContext } from "../components/context/LoginProvider";
// import { LoginContext } from "../components/context/LoginProvider";

const PrivateRouter = () => {
  //- global state´den okunacak bilgiye göre
  // const user = true
  //? consuming
  // const { signed } = useContext(LoginContext);
  const {signed} = useLoginContext()
  return signed ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
