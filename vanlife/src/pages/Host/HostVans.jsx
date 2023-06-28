import React from 'react'
import { Link } from 'react-router-dom'

function HostVans() {
















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