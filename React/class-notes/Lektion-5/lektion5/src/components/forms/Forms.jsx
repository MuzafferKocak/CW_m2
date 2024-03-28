import { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function Forms() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
const handleUsername = (e)=>{
// console.log(e.target.value)  //? inputtalki degeri verir
setUsername(e.target.value)  //?statemizi güncelledik
}

//? state her güncellendikten sonra component re-render olur ve değişen kısımlar DOM'a basilir.
console.log(username)

const handleSubmit = (e)=> {
    console.log(e);
    e.preventDefault() //? submit eventinin dogal davranislarini engelle

    //? ileride bir submit isleminin neticesinde verilerin nasil post edilebilecegini göstermek adina eklenmistir
    // const res = axios.post("url", {
    //     username: username,
    //     email: email,
    //     password: password,
    // })

    alert(
        `username: ${username},
            email: ${email},
         password: ${password},`

    )
        //? Post yapildiktan sonra statenin silinmesi
    setEmail("")
    setUsername("")
    setPassword("")
}

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-danger">FORMS</h1>
      <Form.Group className="mb-3" controlId="username" >
        <Form.Label>
        {/* Short circuit veya ternary ile kosullu renedering yapilabilir */}
        {username && <span>Hello {username}</span>}
        
        </Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={handleUsername} id="username" name="username" value={username} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{email && <span>Email: {email}</span>}</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Forms