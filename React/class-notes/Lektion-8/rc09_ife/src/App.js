import { useState } from "react"
import LifeCycleMethods from "./components/LifeCycleMethods"
import UseEffectHook from "./components/UseEffectHook"
import User from "./components/User"

function App() {
  const [göster, setGöster]= useState(true)



  return (
    <div className="container text-center mt-4">
    <button className="btn btn-danger" onClick={()=> setGöster(!göster)}>{göster ? "Gizle" : "Göster"}</button>

    {/* {göster && <LifeCycleMethods />} */}
    {/* {göster && <UseEffectHook />} */}
    {göster && <User />}
      
      
    </div>
  )
}

export default App