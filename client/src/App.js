import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './reset.css'
import './App.css'

import Auth from './modules/Auth'
import Header from './components/Header'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import Results from './components/Results'
import Food from './components/Food'

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
    console.log("logging out")
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
      console.log("logged out")
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
    return (
      <Router>
        <div className="App">
          <Header
            auth={this.state.auth}
            clearSearch={this.clearSearch}
            logoutUser={this.logoutUser}
            sendResults={this.sendResults}
          />
          <div className="main-content">
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" render={() =>
              <Login checkAuthenticate={this.checkAuthenticate}/>
            } />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" render={() =>
              <Redirect to="/login" />
            } />
            <Route exact path="/food" render={() => (
              this.state.recentFood ? (
                <Food
                  recentFoodData={this.state.recentFoodData}
                />
              ) : (
                <Redirect to="/" />
              )
              )} />
            <Route exact path="/" render={() => (
              this.state.recentSearch ? (
                <Results
                  results={this.state.recentSearchData}
                  sendFood={this.sendFood}
                />
              ) : (
                <p className="margin-t">Please enter a search term.</p>
              )
            )} />
          </div>
        </div>
      </Router>
    )
  }

}

export default App
