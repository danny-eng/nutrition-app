import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './reset.css'
import './App.css'

import Auth from './modules/Auth'

import Header from './components/Header'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import Return from './components/Return'
import SearchController from './components/SearchController'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      auth: Auth.isUserAuthenticated(),
      recentSearchData: {},
      recentSearch: false,
      recentFoodData: {},
      recentFood: false
    }
    this.checkAuthenticate = this.checkAuthenticate.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.sendFood = this.sendFood.bind(this)
    this.sendResults = this.sendResults.bind(this)
  }

  checkAuthenticate(){
    this.setState({
      auth: Auth.isUserAuthenticated(),
    })
  }

  clearSearch(){
    this.setState({
      recentFoodData: {},
      recentFood: false
    })
  }

  logoutUser(){
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(res => {
      Auth.deauthenticateUser();
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    })
  }

  sendFood(ndbno){
    fetch(`https://api.nal.usda.gov/ndb/reports/?ndbno=${ndbno}&type=b&format=json&api_key=QIH0VoWhfdeREixvllH9ohRQLHfp9TPKk5F78Owm`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        recentFoodData: res,
        recentFood: true
      })
    })
  }

  sendResults(data){
    this.setState({
      recentSearchData: data,
      recentSearch: true
    })
  }

  // -----

  render() {
    console.log(this.state.auth)
    console.log(Auth.getToken())
    return (
      <Router>
        <div className="App">
          <Header
            auth={this.state.auth}
            clearSearch={this.clearSearch}
            logoutUser={this.logoutUser}
            sendResults={this.sendResults}
          />
          <div className="main-content margin-t">
            <Switch>
              <Route exact path="/" render={() =>
                <SearchController />
              } />
              <Route exact path="/login" render={() => (
                this.state.auth ? (
                  <Redirect to="/profile" />
                ) : (
                  <Login checkAuthenticate={this.checkAuthenticate} />
                )
              )} />
              <Route exact path="/profile" render={() =>
                <Profile />
              } />
              <Route exact path="/register" render={() =>
                <Register />
              } />
              <Route exact path="/logout" render={() =>
                <Redirect to="/" />
              } />
              <Route component={Return} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }

}

export default App
