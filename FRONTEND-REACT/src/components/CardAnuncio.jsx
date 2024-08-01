import React from "react";

const CardAnuncio = ({ anuncio }) => {
  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return "No especificada";
    const date = new Date(dateTimeString);
    return date.toLocaleString("es-ES", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="col">
      <div className="card h-100">
        <div>
          <h3>{anuncio.titulo}</h3>
        </div>
        <div className="card-body d-flex justify-content-around align-items-center">
          <div className="w-25">
            <img
              src={anuncio.imgperfil || "https://placehold.co/400"}
              className="card-img-top"
              alt="Perfil del cuidador"
              id="imgCardAnuncio"
            />
          </div>
          <div className="d-flex w-75 justify-content-center">
            <h5 className="card-title me-1">{anuncio.nombre}</h5>
            <h5 className="card-title">{anuncio.apellido}</h5>
          </div>
        </div>

        <div className="card-body">
          <p className="card-text">
            Disponible para cuidados en un radio de{" "}
            <strong>{anuncio.distanciaMaxima} km, desde {anuncio.direccion}, {anuncio.localidad}</strong>
          </p>
          <p className="card-text">
            Disponible para cuidar: <strong>{anuncio.selectedPets}</strong>
          </p>
          <p className="card-text">
            Disponible para: <strong>{anuncio.serviceOptions}</strong>
          </p>
          <p className="card-text">
            Puedo ocupar el rol de: <strong>{anuncio.selectedRols}</strong>
          </p>
          <p className="card-text">
            Precio por hora:{" "}
            <strong>
              {anuncio.precio} <i className="fa-solid fa-dollar-sign"></i>/h
            </strong>
          </p>
          <p className="card-text">
            Fecha de inicio del servicio:{" "}
            <strong>{formatDateTime(anuncio.fechaInicio)}</strong>
          </p>
          <p className="card-text">
            Fecha de fin del servicio:{" "}
            <strong>{formatDateTime(anuncio.fechaFin)}</strong>
          </p>
        </div>
        <div className="container-fluid border rounded my-2 py-2">
          <h5>Observaciones:</h5>
          <p>{anuncio.descripcion}</p>
        </div>
        <div className="card-footer mt-2">
          <small className="text-body-secondary">
            Última actualización: {anuncio.ultimaActualizacion}
          </small>
        </div>
      </div>
    </div>
  );
};

export default CardAnuncio;