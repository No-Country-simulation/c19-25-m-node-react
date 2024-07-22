import React, { useState } from 'react';
import CrearAnuncio from '../components/CrearAnuncio';
import CardAnuncio from '../components/CardAnuncio';

const Anuncios = () => {
  const [anuncio, setAnuncio] = useState({
    titulo: '',
    descripcion: '',
    precio: '',
    selectedPets: {
      Perros: false,
      Gatos: false,
      Pajaros: false,
      Peces: false
    },
    serviceOptions: {
      Voyasudomicilio: false,
      Soloenmidomicilio: false
    },
    selectedRols: {
      Paseador: false,
      Cuidador: false
    },
    distanciaMaxima: '',
    fechaInicio: '',
    fechaFin: '',
    direccion: '', // Coger de la base de datos
    nombre: '', // Coger de la base de datos
    apellido: '' // Coger de la base de datos
    // imagen de perfil // Coger de la base de datos
  });

  const handleAnuncioChange = (newAnuncio) => {
    setAnuncio((prevAnuncio) => ({
      ...prevAnuncio,
      ...newAnuncio
    }));
  };

  return (
    <div className="container min-height-vh d-flex flex-column justify-content-center align-items-center">
      <div className='text-start w-100 my-4'>
        <h2>Publica aquí tu nuevo anuncio: </h2>
      </div>
      <div className='d-flex justify-content-between align-items-center w-100'>
        <div className='row  mb-5'>
          <div className='col-12 col-lg-6 my-lg-auto'>
            <CrearAnuncio anuncio={anuncio} onAnuncioChange={handleAnuncioChange} />
          </div>
          <div className='col-12 col-lg-6 mt-5 my-lg-auto'>
            <CardAnuncio anuncio={anuncio} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anuncios;
