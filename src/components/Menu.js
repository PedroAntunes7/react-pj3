import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Menu.css'
import { useAuth } from '../providers/authProvider'


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
      <div class="col-12">

      <nav class="navbar navbar-expand-sm navbar-light menu">
  <a class="navbar-brand" href="#">FastBoats</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <NavLink to="/">Home</NavLink>
      </li>
      <li class="nav-item">
      <NavLink style={{margin: '0 0 0 10px'}} to="props">Duvidas</NavLink> 
      </li>
      <li class="nav-item">
      <NavLink style={{margin: '0 0 0 10px'}} to="children">Praias</NavLink>
      </li>
      <li class="nav-item">
      <NavLink style={{margin: '0 0 0 10px'}} to="images/icon">Contatos</NavLink>
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
</nav>
        </div>
        </div>

  </>
  )
}

export default Menu