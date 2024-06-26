//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================



import React, { useState } from 'react'

const UseStateCounter = () => {
    //? Local variable
    // let sayac = 0

    //? useState hook'u ile sayac adinda bir state tanimladik.
    const [sayac, setSayac] = useState(0)



    const handleInc =() => {
        // sayac = sayac + 1


        //? sayac state'nin degerini setSayac metodu ile bir arttırdik
        setSayac(sayac + 1)
        
    }
  return (
    <div>
    <h2>Use State Counter</h2>
    <h1>Count:{sayac}</h1>
    <div>
        
        <button onClick={handleInc}>INC</button>
        <button onClick={() => setSayac(0)}>CLR</button>
        {/* Eger setSayac metodunu callback ile yazmazsak bu metot ilk acilistan itibaren doğrudan cagirilmis olur. Bu durumda da sayac state'ini gunceller. State guncellendigi icinde component re-render olur. Re-render ise yeniden setSayac araciligi ile state'in guncellenmesine yol acar ve sonsuz donguye girer */}
        <button onClick={()=>setSayac(sayac -1)}>DEC</button>
      </div>
    </div>
  )
}

export default UseStateCounter