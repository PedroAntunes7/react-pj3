import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Menu.css'
import { useAuth } from '../providers/authProvider'
import Logomenu from '../assets/img/logomenu.png'
import { Dropdown } from 'react-bootstrap'
import bootstrap from 'bootstrap' 


const MenuAdmin = () => {

  const {isLogged, userLogged, setIsLogged, setUserLogged} = useAuth();

  const logout = () => {
    setIsLogged(false)
    setUserLogged({})
    localStorage.removeItem('userLogged')
  }

  return (
    <>
      <div class="row">
      <nav class="navbar navbar-expand-lg menu ">
  <div class="container-fluid">
    <img src={Logomenu} class="navbar-brand imagemenu" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink to="/admin/"  style={{margin: '0 0 0 10px'}}class="nav-link" href="#">Home</NavLink>
        </li>
        <Dropdown>
  <Dropdown.Toggle variant="white" id="dropdown-basic">
    Classificados
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item> <NavLink style={{margin: '0 0 0 10px'}} to="/adminboat/" class="nav-link active" aria-current="page" href="#">Barcos</NavLink></Dropdown.Item>
    <Dropdown.Item><NavLink style={{margin: '0 0 0 10px'}} to="/adminjet/" class="nav-link active" aria-current="page" href="#">JetSkis</NavLink></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        <li class="nav-item">
         
        </li>

        <li class="nav-item ">
          <NavLink to="Praia" style={{margin: '0 0 0 10px'}}class="nav-link">Praias</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="Contatos" style={{margin: '0 0 0 10px'}} class="nav-link">Contatos</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>

  </>
  )
}

export default MenuAdmin