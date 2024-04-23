import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { LoginContext } from "../components/context/LoginContext"

const PrivateRouter = () => {
  //- global state´den okunacak bilgiye göre
  // const user = true
  //? consuming
  const {signed} = useContext(LoginContext)
  return signed ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter