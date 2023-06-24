import React from 'react'
import { useParams } from 'react-router-dom'

function VanDetail() {
    const params = useParams()
    console.log(params)
  return (
    <h1>Van details page goes here</h1>
    )
}

export default VanDetail