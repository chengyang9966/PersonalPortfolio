import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";
import { BsMoon, BsSun,RiArrowUpSLine } from "react-icons/all";
import { Mode, HeaderType } from "src/Types";

const Header = (props: HeaderType) => {
  const [theme, setTheme] = useState(Mode.light);
  const [deg, setDeg] = useState(true);
  useEffect(() => {
    var temp = localStorage.getItem("theme");
    if (temp) {
      setTheme(temp);
      document.body.className = "";
      document.body?.classList.add(theme);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      props.theme(theme);
      localStorage.setItem("theme", theme);
      document.body.className = "";
      document.body?.classList.add(theme);
    }, 2000);
    return () => clearInterval(intervalId); //This is important
  }, [theme]);

  return (
    <Navbar id="navbar-example2"  expand={"lg"} fixed={"top"} bg={"faded"} variant={"light"}>
      <Container >
        <a className="navbar-brand" href="#">
          Cheng Yang
        </a>

        <Navbar.Toggle aria-controls="main-navigation" onClick={()=>setDeg(!deg)} children={<RiArrowUpSLine className={deg?"arrow-icon-up":"arrow-icon-down"}/>}  />
        <Navbar.Collapse id="main-navigation"  className="justify-content-center">
          <Nav className="navbar-nav mx-auto ">
            <Nav.Item className="text-center">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center">
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center">
              <Nav.Link href="#skill">Skill</Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center">
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center">
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center   d-md-block d-lg-none	">
            <span
            className="navbar-text	 "
            onClick={() =>
              setTheme(theme === Mode.dark ? Mode.light : Mode.dark)
            }
          >
            {theme === Mode.light ? (
              <BsSun className="sun" />
            ) : (
              <BsMoon className="moon" />
            )}
          </span>
            </Nav.Item>
          </Nav>
          <span
            className="navbar-text 	d-none d-lg-block"
            onClick={() =>
              setTheme(theme === Mode.dark ? Mode.light : Mode.dark)
            }
          >
            {theme === Mode.light ? (
              <BsSun className="sun" />
            ) : (
              <BsMoon className="moon" />
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
