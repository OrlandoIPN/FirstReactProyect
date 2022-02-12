//SNIPPED teclado
//rafcp snipped con propTypes y Reac
//rafc funcional component
//rafce funcional component con export

import React from 'react';
import { QueueList } from './components/QueueList';



const Layout = () => {
    return <div>
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
        <div className='contenido-principal'>
            <main className='blog'>
                <div className='blog_izquierda'>
                    <div className='blog_izquiera-contenido'>
                        <h2>A Mad Tea-Party</h2>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                        <hr></hr>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button className='button'>Go to items</button>
                    </div>
                </div>
                <div className='blog_derecha'>
                    <img src={'../img/tanjiro.png'}
                        alt='logo'
                        className='img_logo' />
                </div>
            </main>
            <QueueList />
            <footer className='footer'><p>Sticky Footer, All rights reserved 2022.</p></footer>
            
        </div>
    </div>;
};

export default Layout;
