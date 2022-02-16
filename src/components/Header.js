import React from 'react'
import { Nav } from './Nav'


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

                    <Nav />
                </div>
            </div>
        </header>
    )
}

//rafc snipped



