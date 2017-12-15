import React, { Component } from 'react'

import Result from './Result'

class Results extends Component {
  render(){
    return (
      <div>
        <p>Searched for "{this.props.resultsData.list.q}"</p>
        <p>Displayed results: {this.props.resultsData.list.start} to {this.props.resultsData.list.end} of {this.props.resultsData.list.total}</p>
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
    )
  }
}

export default Results
