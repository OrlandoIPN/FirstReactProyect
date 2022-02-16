import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className='navegacion'>

            <NavLink to="/Home" className='navegacion_enlace'>Home</NavLink>
            <NavLink to="/Items" className='navegacion_enlace'>Items</NavLink>
            <NavLink to="/Profile" className='navegacion_enlace'>Profile</NavLink>
            <NavLink to="/LogOff" className='navegacion_enlace'>Logoff</NavLink>
            {/* <Link to="/Home" className='navegacion_enlace'>Home</Link>  */}

        </nav>
    )
}
