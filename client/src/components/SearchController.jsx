import React, { Component } from 'react'

import Auth from '../modules/Auth'

import Food from './Food'
import Search from './Search'
import Results from './Results'

class SearchController extends Component {

  constructor(props){
    super(props)
    this.state = {
      foodData: null,
      foodDataLoaded: false,
      resultsData: null,
      resultsDataLoaded: false,
      offset: 0
    }
    this.getFood = this.getFood.bind(this)
    this.getResults = this.getResults.bind(this)
    this.returnToSearch = this.returnToSearch.bind(this)
    this.saveFood = this.saveFood.bind(this)
    this.plusOffset = this.plusOffset.bind(this)
    this.minusOffset = this.minusOffset.bind(this)
  }

  getResults(searchQuery){
    this.setState({
      resultsData: null,
      resultsDataLoaded: false
    })
    fetch(`https://api.nal.usda.gov/ndb/search/?format=json&q=${searchQuery}&sort=n&max=25&offset=0&api_key=QIH0VoWhfdeREixvllH9ohRQLHfp9TPKk5F78Owm`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        resultsData: res,
        resultsDataLoaded: true
      })
    })
  }

  plusOffset(){
    let offset = this.state.offset + 25
    this.getResultsOffset(this.state.resultsData.list.q, offset)
    this.setState({
      offset: offset
    })
  }

  minusOffset(){
    let offset = this.state.offset - 25
    this.getResultsOffset(this.state.resultsData.list.q, offset)
    this.setState({
      offset: offset
    })
  }

  getResultsOffset(searchQuery, offset){
    this.setState({
      resultsData: null,
      resultsDataLoaded: false
    })
    fetch(`https://api.nal.usda.gov/ndb/search/?format=json&q=${searchQuery}&sort=n&max=${offset + 25}&offset=${offset}&api_key=QIH0VoWhfdeREixvllH9ohRQLHfp9TPKk5F78Owm`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        resultsData: res,
        resultsDataLoaded: true
      })
    })
  }

  getFood(ndbno){
    this.setState({
      foodData: null,
      foodDataLoaded: false
    })
    fetch(`https://api.nal.usda.gov/ndb/reports/?ndbno=${ndbno}&type=b&format=json&api_key=QIH0VoWhfdeREixvllH9ohRQLHfp9TPKk5F78Owm`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        foodData: res,
        foodDataLoaded: true
      })
    })
  }

  returnToSearch(){
    this.setState({
      foodData: null,
      foodDataLoaded: false
    })
  }

  saveFood(ndbno, name){
    fetch('/favorites', {
      method: 'POST',
      body: JSON.stringify({
        favorite: {
          ndbno: ndbno,
          name: name
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(res => res.json())
  }

  render(){
    return (
      <div className="inner-contents">
        <Search
          getResults={this.getResults}
        />
        {this.state.resultsDataLoaded ? (
          this.state.foodDataLoaded ? (
            <Food
              foodData={this.state.foodData}
              returnToSearch={this.returnToSearch}
              saveFood={this.saveFood}
            />
          ) : (
            <Results
              resultsData={this.state.resultsData}
              getFood={this.getFood}
            />
          )
        ) : (
          <div className="message">
            <p className="bold">Please enter a search term.</p>
          </div>
        )}
        {this.state.resultsDataLoaded ? (
          this.state.foodDataLoaded ? (
            <p></p>
          ) : (
            <div className="tray">
              {this.state.offset > 0 ? (
                <div className="tray-button" onClick={() => this.minusOffset()}><p>Prev</p></div>
              ) : (
                <p></p>
              )}
              <div className="tray-button" onClick={() => this.plusOffset()}><p>Next</p></div>
            </div>
          )
          ) : (
            <p></p>
          )
        }
      </div>
    )
  }

}

export default SearchController
