import React from "react";

const CardAnuncio = ({ anuncio }) => {
  const selectedPets = Object.keys(anuncio.selectedPets).filter((pet) => anuncio.selectedPets[pet]).join(", ");
  const serviceOptions = Object.keys(anuncio.serviceOptions)
    .filter((option) => anuncio.serviceOptions[option])
    .map((option) => {
      if (option === "Voyasudomicilio") return "Voy a su domicilio";
      if (option === "Soloenmidomicilio") return "Solo en mi domicilio";
      return option;
    })
    .join(" y ");

  // Calcular la dirección con la distancia máxima
  const direccionConDistancia = `${anuncio.direccion || 'No especificada'} (${anuncio.distanciaMaxima || 0} km)`;
  const selectedRols = Object.keys(anuncio.selectedRols).filter((rol) => anuncio.selectedRols[rol]).join(" y ");


  // Formatear fechas y horas
  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return 'No especificada';
    const date = new Date(dateTimeString);
    return date.toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' });
  };

  return (
    <div className="">
      <div className="col">
        <div className="card h-100">
          <h5 className="card-title">Esto es una vista previa de tu anuncio:</h5>
          <div>
            <h3>{anuncio.titulo || 'Título del anuncio'}</h3>
          </div>
          <div className="card-body d-flex justify-content-around align-items-center">
            <div className="w-25">
              <img src="https://placehold.co/400" className="card-img-top" alt="..." id="imgCardAnuncio" />
            </div>
            <div className="d-flex w-75 justify-content-end">
              <h5 className="card-title me-3">{anuncio.nombre || "Nombre"}</h5>
              <h5 className="card-title">{anuncio.apellido || "Apellido"}</h5>
            </div>
          </div>
          
          <div className="card-body">
            <p className="card-text">Disponible para cuidados en {direccionConDistancia}</p>
            <p className="card-text">Disponible para cuidar {selectedPets}</p>
            <p className="card-text">Disponible para {serviceOptions}</p>
            <p className="card-text">Puedo ocupar el rol de: {selectedRols}</p>
            <p className="card-text">Precio por hora: {anuncio.precio || 'No especificado'} <i className="fa-solid fa-dollar-sign"></i></p>
            <p className="card-text">Fecha de inicio del servicio: {formatDateTime(anuncio.fechaInicio)}</p>
            <p className="card-text">Fecha de fin del servicio: {formatDateTime(anuncio.fechaFin)}</p>
          </div>
          <div className="container-fluid border rounded my-2 py-2">
            <h5>Observaciones:</h5>
            <p>{anuncio.descripcion || 'No hay observaciones'}</p>
          </div>
          <div className="card-footer mt-2">
            <small className="text-body-secondary">Última actualización: Ahora mismo</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAnuncio;