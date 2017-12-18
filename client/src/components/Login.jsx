import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Auth from '../modules/Auth'

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      loginUserName: "",
      loginPassword: "",
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillUnmount(){
    this.setState({
      loginUserName: '',
      loginPassword: '',
    })
  }

  handleLoginSubmit(e){
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.loginUserName,
        password: this.state.loginPassword
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      if (res.token) {
        Auth.authenticateToken(res.token);
        this.props.checkAuthenticate()
      }
    }).catch(err => {
      console.log(err);
    })
  }

  handleChange(e){
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <div className="inner-contents register">
        <form onSubmit={this.handleLoginSubmit}>
          <input
            name="loginUserName"
            placeholder="Username" 
            value={this.state.loginUserName}
            onChange={this.handleChange}
          />
          <input
            name="loginPassword"
            placeholder="Password" 
            value={this.state.loginPassword}
            onChange={this.handleChange}
          />
          <input type="submit" value="Login" />
        </form>
        <Link className="return-link" to="/">Return to search</Link>
      </div>
    )
  }
}

export default Login

