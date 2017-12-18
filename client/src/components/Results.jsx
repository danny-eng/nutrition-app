import React, { Component } from 'react'

import Result from './Result'

class Results extends Component {
  render(){
    return (
      <div className="all-results">
        {this.props.resultsData.list ? (
          <div>
            <p>Searched for "{this.props.resultsData.list.q}".</p>
            <p>Displaying results: {this.props.resultsData.list.start} to {this.props.resultsData.list.end} of {this.props.resultsData.list.total}</p>
            <div className="results-list">
              {this.props.resultsData.list.item.map(item => {
                return (
                  <Result
                    key={item.offset}
                    name={item.name}
                    ndbno={item.ndbno}
                    getFood={this.props.getFood}
                  />
                )}
              )}
            </div>
          </div>
        ) : (
          <div className="message">
            <p className="bold">No results found. Please try another term.</p>
          </div>
        )}
      </div>
    )
  }
}

export default Results
