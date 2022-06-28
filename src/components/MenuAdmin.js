import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Menu.css'
import { useAuth } from '../providers/authProvider'
import {
  Navbar,
  Container,
  NavbarBrand,
  NavDropdown,
  Nav
} from "react-bootstrap";
import Logo from "../assets/img/logofastboat.png";

const MenuAdmin = () => {

  const {isLogged, userLogged, setIsLogged, setUserLogged} = useAuth();

  const logout = () => {
    setIsLogged(false)
    setUserLogged({})
    localStorage.removeItem('userLogged')
  }

  return (
    <>
             <Navbar bg="" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img src={Logo} className="ajusteimg" />{" "}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <NavLink
                    to="/admin/"
                    style={{ margin: "0 0 0 10px" }}
                    class="nav-link"
                    href="#"
                  >
                    Home
                  </NavLink>
                </Nav.Link>
                <NavDropdown title="Classificados" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <NavLink
                      style={{ margin: "0 0 0 10px" }}
                      to="/adminboat/"
                      class="nav-link active"
                      aria-current="page"
                      href="#"
                    >
                      Barcos
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      style={{ margin: "0 0 0 10px" }}
                      to="/adminjet/"
                      class="nav-link active"
                      aria-current="page"
                      href="#"
                    >
                      JetSkis
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <NavLink
                    to="/adminpraia/"
                    style={{ margin: "0 0 0 10px" }}
                    class="nav-link"
                  >
                    Praias
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  </>
  )
}

export default MenuAdmin