import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
        <div>404 Not Found</div>
        <Link to="/">Go to Home Page</Link><br/>
    </>
    
  )
}

export default NotFoundPage