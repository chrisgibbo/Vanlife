import React from 'react'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
        <h1>This is the layout Route</h1>
        <Outlet />
    </>
    )
}

export default Layout