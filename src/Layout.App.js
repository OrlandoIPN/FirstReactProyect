//SNIPPED teclado
//rafcp snipped con propTypes y Reac
//rafc funcional component
//rafce funcional component con export

import React from 'react';
import { Main } from './components/Main';
import { QuotesList } from './components/QuotesList';



const Layout = () => {
    return <div>
        <div className='contenido-principal'>
            <Main /> 
            <QuotesList />
        </div>
    </div>;
};

export default Layout;
