import { useState } from 'react'
import {Route,Routes,Link } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Perfil from './routes/Perfil.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Registrar from './routes/Registrar.jsx'
import Anuncios from './pages/Anuncios.jsx'
import Header from './components/Header/Header.jsx'

import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/registrar' element={<Registrar/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/anuncios' element={<Anuncios/>}/>
      </Routes>
    </>
  )
}

export default App
