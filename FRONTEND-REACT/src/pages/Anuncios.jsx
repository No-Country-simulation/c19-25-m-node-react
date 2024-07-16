import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FormRegistro2 from '../components/FormRegistro2';  // Importa tu componente FormRegistro2
import CrearAnuncio from '../components/CrearAnuncio';  // Importa tu componente CrearAnuncio

const Anuncios = () => {
  return (
    <div className="container">
      <h2>Página de Anuncios</h2>
      <FormRegistro2 />
    </div>
  );
};

export default Anuncios;
