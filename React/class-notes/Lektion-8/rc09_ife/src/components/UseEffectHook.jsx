//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.


//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);





import { useState, useEffect } from "react"



const UseEffectHook = () => {

  const [count, setCount] = useState(0)

// useEffect(() => {
//   console.log("2-componentDidMount");

//   //? clean-up funct. component DOM tree dan kaldirdiktan sonra calisir
//   return ()=> {
//     console.log("4-componentWillUnmount");
//   }
  
// }, []) //? dependency array bos oldugu icin fonksiyonun gövdesi sadece ilk render sonrasinda (birkere) calisir

//? componentDidUpdate + componentDidUpdate

useEffect(() => {
  console.log("2-componentDidMount");
  console.log("2-componentDidUpdate");


}, [count]) //? count state i her degisdiginde fonksioynun gövdesi tekrar calisti bu durumda gövde hem mounting de hemde updatingde calismis oldu 

//? componentWillUnmount
useEffect(()=> {
  return ()=> {
    console.log("4-componentWillUnmount");
  }
})




console.log("1-Rendering");


    return (
      <div className="container text-center">
        <h1 className="text-danger">USe EFFECT METHODS</h1>
        <h3>COUNT={count}</h3>
        <button className="btn btn-info" onClick={() => setCount(count + 1)}>
          INC
        </button>
      </div>
    )
  }
  
  export default UseEffectHook