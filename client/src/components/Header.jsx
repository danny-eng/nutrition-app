import React from 'react'
import { Link } from 'react-router-dom'

function Header (props){
  return (
    <div className="header">
      <p></p>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default Header
