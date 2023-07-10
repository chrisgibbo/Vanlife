import React from 'react'
import { useRouteError } from 'react-router-dom'


function Error() {
    const error = useRouteError()
  return (
    <h1>An error occured!</h1>
  )
}

export default Error