import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";

import React from 'react'

const Header = () => {
  return (
    <Container><Image src={logo} width="200px" /><br />
    <h1 className="my-2 tittle">FOOTBALL LEGENDS</h1>
    
    </Container>
  )
}

export default Header