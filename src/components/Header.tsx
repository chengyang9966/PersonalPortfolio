import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";
import { BsMoon, BsSun, RiArrowUpSLine } from "react-icons/all";
import { Mode, HeaderType } from "src/Types";

const Header = (props: HeaderType) => {
  const [theme, setTheme] = useState(Mode.light);
  const [navExpanded, setnavExpanded] = useState(false);
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
      <div
        className="close-navbar-toggler"
        onClick={() => {
          setnavExpanded(false);
        }}
        children={null}
      />
      <Navbar
        id="navbar"
        expand={"lg"}
        fixed={"top"}
        bg={"faded"}
        variant={"light"}
        onToggle={() => setnavExpanded(!navExpanded)}
        expanded={navExpanded}
      >
        <Container>
          <a className="navbar-brand" href="#home">
            Cheng Yang
          </a>

          <Navbar.Toggle
            id="navbar-toggler"
            aria-controls="navbarSupportedContent"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            role="button"
            aria-expanded="false"
            children={
              <RiArrowUpSLine
                className={!navExpanded ? "arrow-icon-up" : "arrow-icon-down"}
              />
            }
          />
          <Navbar.Collapse
            id="navbarSupportedContent"
            className="justify-content-center"
          >
            <Nav
              className="navbar-nav mx-auto "
              onSelect={() => setnavExpanded(false)}
            >
              <Nav.Item className="text-center">
                <Nav.Link href="#home" onClick={() => setnavExpanded(false)}>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center">
                <Nav.Link href="#about" onClick={() => setnavExpanded(false)}>
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center">
                <Nav.Link href="#skill" onClick={() => setnavExpanded(false)}>
                  Skill
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center">
                <Nav.Link
                  href="#portfolio"
                  onClick={() => setnavExpanded(false)}
                >
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center">
                <Nav.Link href="#contact" onClick={() => setnavExpanded(false)}>
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text-center  d-md-block d-lg-none	">
                <span
                  className="navbar-text"
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
    </>
  );
};

export default Header;
