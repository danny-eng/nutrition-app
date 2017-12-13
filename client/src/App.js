import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      search: "",
      searchSave: "",
      data: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.getSearch = this.getSearch.bind(this)
  }

  handleChange(e){
    this.setState({
      search: e.target.value
    })
  }

  handleForm(e){
    let searchSave = e.target.search.value
    e.preventDefault()
    this.setState({
      searchSave: searchSave
    })
    this.getSearch(searchSave)
  }

  getSearch(search){
    fetch(`https://api.nal.usda.gov/ndb/search/?format=json&q=${search}&sort=n&max=25&offset=0&api_key=QIH0VoWhfdeREixvllH9ohRQLHfp9TPKk5F78Owm`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        data: res
      })
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <form onSubmit={this.handleForm}>
          <input
            name="search"
            type="textbox"
            placeholder="Enter your search here"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }

}

export default App
