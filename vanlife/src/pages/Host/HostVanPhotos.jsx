import React from 'react'
import { useOutletContext } from 'react-router-dom'


function HostVanPhotos() {
  const { currentVan } = useOutletContext()

  return (
    <h2>Host van photos here</h2>
  )
}

export default HostVanPhotos