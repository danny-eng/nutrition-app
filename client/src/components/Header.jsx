import React from 'react'
import { Link } from 'react-router-dom'

function Header(props){
  return (
    <div className="header">
      <p></p>
      {props.auth ? (
        <div className="navigation-buttons">
          <Link className="navigation-button" to="/profile" onClick={props.getFavorites}>Profile</Link>
          <Link className="navigation-button" to="/logout" onClick={props.logoutUser}>Logout</Link>
        </div>
      ) : (
        <div className="navigation-buttons">
          <Link className="navigation-button" to="/login">Login</Link>
          <Link className="navigation-button" to="/register">Register</Link>
        </div>
      )}
    </div>
  )
}

export default Header
