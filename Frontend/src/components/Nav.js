import logo from '../images/crm logo.png'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function Nav() {
  return (
    <Nav>


  
    <div className="logo-container">

      <img src={logo} alt="logo"/>
    </div>
     <div className="controls-container">
     <div className="icon" onClick={() => navigate('/ticket')}>➕</div>
     <div className="icon" onClick={() => navigate('/')}>❮❮</div>
   </div>
   </Nav>
  )
}
