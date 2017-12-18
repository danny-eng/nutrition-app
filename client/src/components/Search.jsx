import React, { Component } from 'react'

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      search: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  handleChange(e){
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleSearchSubmit(e){
    e.preventDefault()
    this.props.getResults(e.target.search.value)
  }

  render() {
    return (
      <div className="search search-unique">
        <form onSubmit={this.handleSearchSubmit}>
          <input
            name="search"
            placeholder="Enter your search here."
            value={this.state.search}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }

}

export default Search
