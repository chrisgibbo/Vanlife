import React from 'react'

function Vans() {
  const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    console.log(vans)


  return (
    <div>
        <h1>Vans page goes here 🚐</h1>
    </div>
  )
}

export default Vans;