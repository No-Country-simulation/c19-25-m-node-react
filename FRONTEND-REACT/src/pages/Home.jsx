import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ComponenteHome1 from "../components/ComponenteHome1";
import { TokenContext } from "../components/Providers/TokenContext";

export default function Home() {
  const context = useContext(TokenContext);

  let datosComponenteHome = [
    {
      id: 1,
      image: "https://i.imgur.com/cY5bp3O.jpeg",
      tittle: "Encuentra Alojamiento para tu Mascota",
      subtittle:
        "Busca gente en tu zona que cuide a tu mascota con el mismo amor que tú",
    },
    {
      id: 2,
      image: "https://i.imgur.com/YsqdKnW.jpeg",
      tittle: "Sientete protegido con nuestra Garantía",
      subtittle:
        "Gracias a nuestro seguro, lo que le pueda ocurrir a tu mascota corre a nuestro cargo",
    },
    {
      id: 3,
      image: "https://i.imgur.com/IWHOzQh.jpeg",
      tittle: "Forma parte de nuestra Comunidad",
      subtittle:
        "Somos amantes de las mascotas y tenemos un promedio de 4.94/5 estrellas",
    },
  ];

  return (
    <div className="min-height-vh pt-5 mt-5">
      {/* {token && <h1>El token funciona</h1>} */}
      <div
        className="d-flex flex-column justify-content-between mx-2 mx-lg-auto"
        id="divContainerTextoYProfileHome"
      >
        <div className="d-flex align-items-center" id="imagenYUsuarioHome">
          <div id="divImageProfile">
            <img
              src={
                context.dataUsuario
                  ? context.dataUsuario.imgperfil
                  : "https://via.placeholder.com/250"
              }
              alt="Imagen de usuario"
              className="img roundedImageCircle"
              id="imageProfileHome"
            />
          </div>
          <h1 className="ms-2 ms-md-5 fontsize-big text-center bg-orange p-4 rounded-5">
            Bienvenido a Yo lo cuido{" "}
            <strong>
              {context.dataUsuario
                ? context.dataUsuario.nombre
                : "No se ha encontrado al usuario"}
            </strong>
          </h1>
        </div>
        <div
          className="d-flex flex-column align-items-center align-items-md-center text-center ms-0 mt-5 bg-orange rounded-5 p-3"
          id="textoDescripcion"
        >
          <h3>Un poco sobre nosotros:</h3>
          <hr className="w-50" />
          <h4>
            En Yo te Cuido podrás encontrar encontrar a personas que se
            preocupen por tu mascota
          </h4>
        </div>
        <div className="d-flex flex-column align-items-center align-items-md-center text-center ms-0 mt-5 bg-orange rounded-4 p-3">
          <h5>
            Ponemos en contacto a personas que necesitan cuidado para sus
            mascotas con cuidadores especializados.
          </h5>
        </div>
      </div>

      <div className="container mt-5" id="divComponentesHome">
        <div className="row ">
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
  );
}
