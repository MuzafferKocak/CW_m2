import React, { useState } from 'react'

const UseStateObject = () => {
    // const [ad, setAd] = useState("Mehmet")
    // const [soyad, setSoyad] = useState("Yilmaz")
    // const [meslek, setmeslek] = useState("Tester")
    // const [salary, setSalary] = useState(50000)

    // const adDegistir =() => {
    //     setAd("Ahmet")
    // }

    const [kisi, setKisi] = useState ({
        ad: "Mehtmet",
        soyad: "Yilmaz",
        meslek: "Tester",
        salary: 50000,
        mood: "Happy"
    })

    const [toggle, setToggle] = useState(true)
    const handleMood = () => {
        setKisi({...kisi, mood: toggle ? "Sad" : "Happy"})
        setToggle(!toggle)
    }
  return (
    <div>
    <h1>UseState Object Example</h1>

    <h2>AD:{kisi.ad}</h2>
    <h2>SOYAD:{kisi.soyad}</h2>
    <h2>MESLEK:{kisi.meslek}</h2>
    <h2>MAAS:{kisi.salary}</h2>

    <h3>Mood:{kisi.mood} </h3>

    <button onClick={()=> setKisi({ ...kisi, ad: "Ahmet"})}>ad degistir</button>
    <button onClick={() => setKisi({ ...kisi, soyad: "Ozturk" })}>
        soyad degistir
      </button>
      <button onClick={() => setKisi({ ...kisi, meslek: "Developer" })}>
        meslek degistir
      </button>
      <button onClick={() => setKisi({ ...kisi, salary: kisi.salary + 5000 })}>
        maaas artir
      </button>
      <button onClick={() => setKisi({ ...kisi, salary: kisi.salary - 1000 })}>
        maaas azalt
      </button>

      <button onClick={handleMood}>Happy/Set</button>
    {/* <button onClick={()=> setSoyad("Ozturk")}>soyad degistir</button>
    <button onClick={()=> setmeslek("Developer")}>meslek degfistir</button>
    <button onClick={()=> setSalary()}>maas artir</button>
    <button onClick={()=> setSalary()}>maas azalt</button> */}
    
    </div>
  )
}

export default UseStateObject