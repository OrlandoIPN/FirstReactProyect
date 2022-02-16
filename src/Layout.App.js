//SNIPPED teclado
//rafcp snipped con propTypes y Reac
//rafc funcional component
//rafce funcional component con export

import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { QuotesList } from './components/QuotesList';



const Layout = () => {
    return <div>
        <Header />
        <div className='contenido-principal'>
            <Main /> 
            <QuotesList />
            <Footer />

        </div>
    </div>;
};

export default Layout;
