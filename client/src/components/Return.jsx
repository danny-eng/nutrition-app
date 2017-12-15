import React from 'react'
import { Link } from 'react-router-dom'

function Return(props){
  return(
    <div>
      <p>Error rendering page. Please return home and try again.</p>
      <Link to="/">Return Home</Link>
    </div>
  )
}

export default Return
