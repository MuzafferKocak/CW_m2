import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";

import React from 'react'

const Header = () => {
  return (
    <Container><Image src={logo} width="200px" />
    <h1>FOOTBALL LEGENDS</h1>
    
    </Container>
  )
}

export default Header