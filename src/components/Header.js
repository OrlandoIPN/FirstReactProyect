import React from 'react'
import { Link } from 'react-router-dom'


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
                        <Link to="/Home" className='navegacion_enlace'>Home</Link> 
                        <Link to="/Items" className='navegacion_enlace'>Items</Link>
                        <Link to="/Profile" className='navegacion_enlace'>Profile</Link>
                        <Link to="/LogOff" className='navegacion_enlace'>Logoff</Link>
                        {/* <a href="#" className='navegacion__enlace'>Home</a>
                        <a href="#" className='navegacion__enlace'>Items</a>
                        <a href="#" className='navegacion__enlace'>Profile</a>
                        <a href="#" className='navegacion__enlace'>Logoff</a> */}
                    </nav>
                </div>
            </div>
        </header>
    )
}

//rafc snipped


