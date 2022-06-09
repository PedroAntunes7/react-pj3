import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Menu.css'
import { useAuth } from '../providers/authProvider'
import Logomenu from '../assets/img/logomenu.png'


const Menu = () => {

  const {isLogged, userLogged, setIsLogged, setUserLogged} = useAuth();

  const logout = () => {
    setIsLogged(false)
    setUserLogged({})
    localStorage.removeItem('userLogged')
  }

  return (
    <>
      <div class="row">
      <nav class="navbar navbar-expand-lg menu">
  <div class="container-fluid">
    <img src={Logomenu} class="navbar-brand imagemenu" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink to="/"  style={{margin: '0 0 0 10px'}}class="nav-link" href="#">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink style={{margin: '0 0 0 10px'}} to="props" class="nav-link active" aria-current="page" href="#">Classificados</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="children" style={{margin: '0 0 0 10px'}}class="nav-link" href="#">Praias</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="images/icon" style={{margin: '0 0 0 10px'}} class="nav-link disabled">Contatos</NavLink>
          { isLogged 
          ? (
            <>
                <span>Logado como: {userLogged.email}</span> 
                <button onClick={logout}>Sair</button>
              </>
          )
          : (<span><Link to="admin/login">Login Admin</Link></span>)
        }
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>

  </>
  )
}

export default Menu