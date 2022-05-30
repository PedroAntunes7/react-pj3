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
    <div className='menu'>
        Menu: <NavLink to="/">Home</NavLink> 
        <NavLink end style={{margin: '0 0 0 10px'}} to="images">Classificados</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="props">Duvidas</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="children">Praias</NavLink> 
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
        <div className='anuncie'>
        <button>Anuncie Aqui!</button>
        </div>

        
    </div>

  )
}

export default Menu