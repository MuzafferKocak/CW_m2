// import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import useAxios from "./useAxios"
import useStockRequest from "./useStockRequest";

//?Custom hook
//? Eger uygulamanın her yerinde kullanmak için bazı fonksiyonlara ihtyaç varsa  ve bu fonksiyonlar içerisinde custom hook'ların ( useSelector, useDispatch,useNavigate etc.) kullanılması gerekiyorsa o Zaman çözüm Bu dosyayı custom hook'a çevirmektir.

const useApiRequest = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { axiosToken, axiosPublic } = useAxios()
  const { getFirms } = useStockRequest();
  // const { token } = useSelector((state) => state.auth)
  const login = async (userData) => {
    //   const BASE_URL = "https://10001.fullstack.clarusway.com"

    dispatch(fetchStart())
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login`,
      //   userData
      // )
      const { data } = await axiosPublic.post("/auth/login/", userData)
      dispatch(loginSuccess(data))
      toastSuccessNotify("Login işlemi başarili")
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Login başarisiz oldu")
      console.log(error)
    }
  }

  const register = async (userInfo) => {
    dispatch(fetchStart())
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/users/`,
      //   userInfo
      // )
      const { data } = await axiosPublic.post("/users/", userInfo)
      dispatch(registerSuccess(data))
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(error.message);
    }
  }
  const logout = async () => {
    dispatch(fetchStart())
    try {
      // await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
      //   headers: { Authorization: `Token ${token}` },
      // })
      await axiosToken.get("/auth/logout")
      dispatch(logoutSuccess())
    } catch (error) {
      dispatch(fetchFail())
    }
  }
  const createFirm = async (createNewFirm) => {
    try {
      await axiosToken.post("/firms/", createNewFirm);
      getFirms();
      console.log("first");
      toastSuccessNotify("Firm Succesfully created.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  return { login, register, logout, createFirm }
}

export default useApiRequest