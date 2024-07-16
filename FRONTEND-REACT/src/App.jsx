import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Perfil from './routes/Perfil.jsx'
import Buscador from './routes/Buscador.jsx'
import Registrar from './routes/Registrar.jsx'
import Anuncios from './pages/Anuncios.jsx'
import Header from './components/Header/Header.jsx'
import FormRegistro2 from './components/FormRegistro2.jsx'

import './App.css'

function App() {

  return (
    <>
      <div className='marginBottomHeader'>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/registrar' element={<Registrar />} />
          <Route path='/buscador' element={<Buscador />} />
          <Route path='/anuncios' element={<Anuncios />} />
          <Route path='/form-registro' element={<FormRegistro2 />} />
        </Routes>
      </div>

    </>
  )
}

export default App
