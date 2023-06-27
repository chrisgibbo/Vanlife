import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'

function HostLayout() {
    const currentActiveStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

  return (
    <>
        <nav className="host-nav">
            <NavLink to="/host"
            style={({isActive}) => isActive ? currentActiveStyle :null}
            >Dashboard</NavLink>
            <NavLink to="/host/income"
            style={({isActive}) => isActive ? currentActiveStyle :null}
            >Income</NavLink>
            <NavLink to="/host/reviews"
            style={({isActive}) => isActive ? currentActiveStyle :null}
            >Reviews</NavLink>
        </nav>
        <Outlet/>
    </>
    )
}

export default HostLayout