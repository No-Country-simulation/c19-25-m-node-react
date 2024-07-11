import React, { useState, useEffect } from 'react';
import ComponenteHome1 from '../components/ComponenteHome1';


export default function Home() {

  let datosComponenteHome = [
    {
      id: 1,
      image: "https://placehold.co/250",
      tittle: "Encuentra Alojamiento para tu Mascota",
      subtittle: "Busca gente en tu zona que cuide a tu mascota con el mismo amor que tú",
    },
    {
      id: 2,
      image: "https://placehold.co/250",
      tittle: "Sientete protegido con nuestra Garantía",
      subtittle: "Gracias a nuestro seguro, lo que le pueda ocurrir a tu mascota corre a nuestro cargo",
    },
    {
      id: 3,
      image: "https://placehold.co/250",
      tittle: "Forma parte de nuestra Comunidad",
      subtittle: "Somos amantes de las mascotas y tenemos un promedio de 4.94/5 estrellas",
    },

  ]

  return (
    <>
      <div className="text-start w-auto mx-3 p-0 mt-5">
        <div className='container-lg d-flex flex-column align-items-center'>
          <div className="d-flex justify-content-between align-items-center row" id='imagenYUsuarioHome'>
            <img src="https://via.placeholder.com/250" alt="Imagen de usuario" className='rounded-circle shadow shadow-4-strong col-7 col-md-3 mb-4'/>
            <h1 className='col-12 col-md-9 mb-4 text-md-end'>Bienvenido a Yo te cuido <strong>USUARIO</strong></h1>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center text-center'>
            <h3>Un poco sobre nosotros:</h3>
            <h4>En Yo te Cuido podrás encontrar encontrar a personas que se preocupen por tu mascota</h4>
            <hr className='w-50' />
            <h5>Ponemos en contacto a personas que necesitan cuidado para sus mascotas con cuidadores especializados.</h5>
          </div>
        </div>

        <div className='container'>
          <div className="row mt-5">
            {datosComponenteHome.map((datosComponente) => (
              <ComponenteHome1
                key={datosComponente.id}
                image={datosComponente.image}
                tittle={datosComponente.tittle}
                subtittle={datosComponente.subtittle}
              />
            ))}
          </div>
        </div>


      </div>

    </>
  );
}
