import React, { Component } from 'react'

import Result from './Result'

class Results extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: this.props.results.list,
      dataLoaded: false,
    }
  }

  componentDidMount(){
    if(this.state.data){
      this.setState({
        dataLoaded: true,
      })
    } else {
      this.setState({
        dataLoaded: false,
      })
    }
  }

  render(){
    return (
      <div className="margin-t">
        {this.state.dataLoaded ? (
          <div>
            <p>Searched for "{this.state.data.q}"</p>
            <p>Displayed results: {this.state.data.start} to {this.state.data.end} of {this.state.data.total}</p>
            <div className="results-list">
              {this.state.data.item.map(item => {
                return(
                  <Result
                    key={item.offset}
                    name={item.name}
                    ndbno={item.ndbno}
                    sendFood={this.props.sendFood}
                  />
                )
              })}
            </div>
          </div>
        ) : (
          <p className="margin-t">Please enter a search term.</p>
        )}
      </div>
    )
  }
}

export default Results
