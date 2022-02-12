import React from 'react'


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
                        <a href="#" className='navegacion__enlace'>Home</a>
                        <a href="#" className='navegacion__enlace'>Items</a>
                        <a href="#" className='navegacion__enlace'>Profile</a>
                        <a href="#" className='navegacion__enlace'>Logoff</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

//rafc snipped


