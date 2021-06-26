import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React, { useState,useEffect } from "react";
import {BsMoon,BsSun} from "react-icons/all";
import {Mode,HeaderType} from 'src/Types'


const Header = (props:HeaderType) => {
  const [theme,setTheme]=useState(Mode.light);
  useEffect(()=>{
    var temp =localStorage.getItem('theme')
    if(temp){
      setTheme(temp)
      document.body.className = "";
      document.body?.classList.add(theme)
    }
  },[])

  useEffect(()=>{
    const intervalId = setInterval(
      ()=>{
        props.theme(theme)
        localStorage.setItem('theme',theme)
        document.body.className = "";
        document.body?.classList.add(theme)
      },2000
    )
    return () => clearInterval(intervalId); //This is important
  },[theme])

  return (
    <>
    <Navbar fixed="top" expand="lg">
      <Container >
        <Navbar.Brand href="#home">Cheng Yang</Navbar.Brand>
         <Container>
          <Nav className="me-auto ">
            <Nav.Item>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#skill">Skill</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
         </Container>
         <Navbar.Text onClick={()=>setTheme(theme===Mode.dark?Mode.light:Mode.dark)}>
        { theme===Mode.light?<BsSun className='sun'/>:<BsMoon className='moon' />}
         </Navbar.Text>
      </Container>
    </Navbar>
    
    </>
  );
};
export default Header;
