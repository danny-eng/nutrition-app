import React from 'react'

function Result (props) {
  return (
    <div className="result" onClick={() => props.getFood(props.ndbno)}>
      <div key={props.ndbno} className="search-result">
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default Result
