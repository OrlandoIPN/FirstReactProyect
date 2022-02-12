//SNIPPED teclado
//rafcp snipped con propTypes y Reac
//rafc funcional component
//rafce funcional component con export

import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { QueueList } from './components/QueueList';



const Layout = () => {
    return <div>
        <Header />
        <div className='contenido-principal'>
            <Main /> 
            <QueueList />
            <Footer />

        </div>
    </div>;
};

export default Layout;
