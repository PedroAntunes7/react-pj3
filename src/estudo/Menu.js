import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <div className='space'>
      Menu:
         <Link to="/">Home</Link> 
        <Link to="images">Images</Link> 
        <Link to="api-integration">Api Integration</Link> 
        <Link to="props">Props</Link> 
        <Link to="children">Children</Link> 
        <Link to="images/icon">Icon</Link> 
    </div>

  )
}

export default Menu