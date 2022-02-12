import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Header = () => {
    return (
        <header className='header'>
            <div className='contenedor'>
                <div className='barra'>
                    <div className='div_logo'>
                        <img src={'../img/react-2.svg'}
                            alt='logo'
                            className='img_logo' />
                        <a href="index.html" className='logo'>
                            <h1 className="logo__nombre">Web App con nav</h1>
                        </a>
                    </div>

                    <nav className='navegacion'>
                        
                        <NavLink to="/Home" className='navegacion_enlace'>Home</NavLink> 
                        <NavLink to="/Items" className='navegacion_enlace'>Items</NavLink>
                        <NavLink to="/Profile" className='navegacion_enlace'>Profile</NavLink>
                        <NavLink to="/LogOff" className='navegacion_enlace'>Logoff</NavLink>
                        {/* <Link to="/Home" className='navegacion_enlace'>Home</Link>  */}
                        
                    </nav>
                </div>
            </div>
        </header>
    )
}

//rafc snipped



