import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.App';
import './normalize.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from './routes/Items';
import Profile from './routes/Profile';
import LogOff from './routes/LogOff';

//SNIPPED teclado
//rafcp snipped con propTypes y Reac
//rafc funcional component
//rafce funcional component con export

const divRoot = document.querySelector('#root');


ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path='home' element={<Layout />}/>
        <Route path='items' element={<Items />}/>
        <Route path='profile' element={<Profile />}/>
        <Route path='logoff' element={<LogOff />}/>
    </Routes>
    </BrowserRouter>,
    divRoot);


