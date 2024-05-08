import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { listAll } from "../features/firmsSlice"

const useStockRequest = () => {
  const { axiosToken, } = useAxios()
  const dispatch = useDispatch()

  const getFirms = async () => {
    
    try {
      const { data } = await axiosToken("/firms")
      // console.log(data)

      dispatch(listAll(data.data))
      //   dispatch()
    } catch (error) {
      //   dispatch()
      console.log(error)
    }
  }

  return { getFirms }
}

export default useStockRequest