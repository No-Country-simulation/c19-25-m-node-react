import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CrearAnuncio from '../components/CrearAnuncio';  // Importa tu componente CrearAnuncio

const Anuncios = () => {
  return (
    <div className="container">
      <h2>Página de Anuncios</h2>
      <div>
        <CrearAnuncio />
      </div>
    </div>
  );
};

export default Anuncios;
