import React from 'react'

function Result (props) {
  return (
    <div onClick={() => props.getFood(props.ndbno)}>
      <div key={props.ndbno} className="search-result">
        <p><b>{props.name}</b></p>
      </div>
    </div>
  )
}

export default Result
