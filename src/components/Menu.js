import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Menu.css'
import { useAuth } from '../providers/authProvider'
import Logomenu from '../assets/img/logomenu.png'
import { Navbar, Container, NavbarBrand, NavDropdown, Nav  } from 'react-bootstrap'
import bootstrap from 'bootstrap' 


const Menu = () => {

  const {isLogged, userLogged, setIsLogged, setUserLogged} = useAuth();

  const logout = () => {
    setIsLogged(false)
    setUserLogged({})
    localStorage.removeItem('userLogged')
  }

  return (
    <>
      <>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><NavLink to="/"  style={{margin: '0 0 0 10px'}}class="nav-link" href="#">Home</NavLink></Nav.Link>
        <NavDropdown title="Classificados" id="basic-nav-dropdown">
          <NavDropdown.Item><NavLink style={{margin: '0 0 0 10px'}} to="Barcos" class="nav-link active" aria-current="page" href="#">Barcos</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink style={{margin: '0 0 0 10px'}} to="Jets" class="nav-link active" aria-current="page" href="#">JetSkis</NavLink></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><NavLink to="Praia" style={{margin: '0 0 0 10px'}}class="nav-link">Praias</NavLink></Nav.Link>
        <Nav.Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
        <li class="nav-item">
         
        </li>

        <li class="nav-item ">
          
        </li>
        <li class="nav-item">
          <NavLink to="Contatos" style={{margin: '0 0 0 10px'}} class="nav-link">Contatos</NavLink>
        </li>


  </>
  )
}

export default Menu