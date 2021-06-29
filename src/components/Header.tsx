import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/all";
import { Mode, HeaderType } from "src/Types";

const Header = (props: HeaderType) => {
  const [theme, setTheme] = useState(Mode.light);
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
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#home">Cheng Yang</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skill">Skill</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
      <li className="nav-item my-2 my-lg-0"  onClick={() =>
                setTheme(theme === Mode.dark ? Mode.light : Mode.dark)
              }>
                {theme === Mode.light ? (
                <BsSun className="sun" />
              ) : (
                <BsMoon className="moon" />
              )}
      </li>
    </ul>

  </div>
</nav> */}
      <Navbar fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Cheng Yang</Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navbar.Collapse id="navbarSupportedContent">
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
            <Navbar.Text>
              {theme === Mode.light ? (
                <BsSun className="sun" />
              ) : (
                <BsMoon className="moon" />
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
