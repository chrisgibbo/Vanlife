import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

function VanDetail() {
    const params = useParams()
    const location = useLocation()
    console.log(location)
    
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

const search = location.state?.search || ""

return (
    <div className="van-detail-container">
    <Link
        to={`..${search}`}
        relative="path"
        className="back-button"
    >&larr; <span>Back to all vans</span></Link>
    
    {van ? (
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>
                {van.type}
            </i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    ) : <h2>Loading...</h2>}
</div>
)
}

export default VanDetail

// 1. What is a route/url parameter? - its a route that allows you to move to certain areas of the website by
// wrapping a path with "Route, between Routes" and sets a placeholder for the URL of a page.
// 2. Add a route parameter called "productId" to the route path below
/* <Route path="/products/:productId" element={<ProductDetail />} /> */
// 3. Add whatever you need to add for the component below to display
// the route parameter in the <h1>
// import {useParams} from "react-router-dom"
// function ProductDetail(){ 
//  const {productId} = useParams()
// return <h1>Product id is {productId}<h1>
//  return <h1>Product detail page goes here</h1>
// }
