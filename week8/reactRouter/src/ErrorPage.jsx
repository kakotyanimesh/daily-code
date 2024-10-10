import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div id='error-page'>
        <h1>Opps Something went wrong</h1>
        <p>
            <i>{ error.statusText || error.message }</i>
        </p>
    </div>
  )
}

export default ErrorPage