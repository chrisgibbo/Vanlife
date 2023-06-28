import React from 'react'
import { Link } from 'react-router-dom'

function HostVans() {
  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    fetch("api/host/vans")
    .then(res => res.json())
    .then(data => setVans(data.vans))
  }, [])















  return (
    <section>
      <h1 className='host-vans-title'>Yourlisted vans</h1>
      <div className='host-vans-list'>
        {
          vans.length > 0 ? (
            <section>
              {hostVansEls}
            </section>
          ) : (
            <h2>Loading ...</h2>
          )     
   
        }
      </div>
    </section>

    )
}

export default HostVans