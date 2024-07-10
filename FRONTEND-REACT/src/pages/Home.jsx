import React, { useState, useEffect } from 'react';




export default function Home() {

  return (
    <>
      <div className="text-start w-auto mx-3 p-0 mt-5">
        <div className='container-lg'>
          <div className="d-flex justify-content-between mx-5 align-items-center">
            <img src="https://via.placeholder.com/250" alt="Imagen de usuario" />
            <h1>Bienvenido a Yo te cuido <strong>USUARIO</strong></h1>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <h5>Un poco sobre nosotros:</h5>
            <h3>En Yo te Cuido podrás encontrar encontrar a personas que se preocupen por tu mascota</h3>
            <hr className='w-50'/>
            <h5>Ponemos en contacto a personas que necesitan cuidado para sus mascotas con cuidadores especializados.</h5>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            
          </div>
        </div>

        
      </div>

    </>
  );
}
