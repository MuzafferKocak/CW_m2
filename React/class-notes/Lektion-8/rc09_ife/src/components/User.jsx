import React, { useState, useEffect } from 'react'

const User = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        dob: "",
        picture: "",
        city: "",
        cell: "",

    })

    const getUser = async()=>{
        const res = await fetch("https://randomuser.me/api/")
        const data = await res.json()
        // console.log(data);
        // console.log(data.results[0]);
        setUserData(data.results[0])
    }
// getUser() //! böyle yapinca sonsuz döngüye giriyor ve Apiye hep istek veriyor 

console.log(userData);

//? componentDidmount
useEffect(() => {

    //* bu kisim ilk render sonrasi bir kere calisir
    const timerId = setInterval(getUser, 5000); //? istegi her 5 saniyede güncelliyor
  getUser()

  //* componentWillUnmount
  return ()=> {
    //? bu kisim da component DOMdan kaldirildiginda bir kere calisir
    console.log("Timer iptal edildi.");
    clearInterval(timerId)
  }

  
}, []) //? dependency array

  return (
    <div className=''>
    
    <img className='rounded-circle m-4' src={userData.picture.large} alt={userData.name.first} />
    <p>Hi My Name is</p>
    <h2>{userData.name.first + "" + userData.name.last}</h2>
    <h4>{userData.email}</h4>
    <h5>{userData.dob.date}</h5>
    <h4>{userData.city}</h4>
    <h6>{userData.cell}</h6>
<button className='btn btn-warning' onClick={getUser}>new user</button>
    </div>
  )
}

export default User