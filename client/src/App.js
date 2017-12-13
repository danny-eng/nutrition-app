import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Auth from './modules/Auth'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Search from './components/Search'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      auth: Auth.isUserAuthenticated()
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="scroll-container">
            <Header />
            <Search />
            <Register />
            <Login />
          </div>
        </div>
      </Router>
    )
  }

}

export default App
