import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanInfo() {
  const { currentVan } = useOutletContext()
  return (
    <section className='host-van-detail-info'>

    </section>

    )
}

export default HostVanInfo