import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout.App'
import Items from '../routes/Items'
import LogOff from '../routes/LogOff'
import Profile from '../routes/Profile'
import { Header } from './Header'
import {Footer} from './Footer'

export const Router = () => {
  return (
    
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path='home' element={<Layout />}/>
        <Route path='items' element={<Items />}/>
        <Route path='profile' element={<Profile />}/>
        <Route path='logoff' element={<LogOff />}/>
    </Routes>
    <Footer />
    </>
  )
}
