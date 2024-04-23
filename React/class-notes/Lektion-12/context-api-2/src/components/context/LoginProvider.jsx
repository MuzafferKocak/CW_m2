import { createContext, useContext, useState } from "react"

//? 1-) Login context'nin olusturulması
export const LoginContext = createContext()


//? Login context icin sarmalayici component olusturduk

const LoginProvider = (props) => {
  const [signed, setSigned] = useState(false)
const values = {signed, setSigned}
  return (
    <LoginContext.Provider value={{values}}>

    {props.children}


    </LoginContext.Provider>
  )
}

export const useLoginContext =()=> {
  return useContext(LoginContext)
}

export default LoginProvider

