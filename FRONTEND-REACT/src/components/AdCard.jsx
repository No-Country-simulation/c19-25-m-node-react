import React from 'react';

export default function AdCard({ ad }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <img src={ad.profileImage} alt={`${ad.name}'s profile`} className="img-thumbnail mb-3" />
        <h5 className="card-title">{ad.name}</h5>
        <p className="card-text">{ad.description}</p>
        <p className="card-text">Dirección: {ad.address}</p>
        <p className="card-text">Fecha de Inicio: {ad.startDate}</p>
        <p className="card-text">Hora de Inicio: {ad.startTime}</p>
        <p className="card-text">Fecha de Fin: {ad.endDate}</p>
        <p className="card-text">Hora de Fin: {ad.endTime}</p>
        <p className="card-text">Precio por Hora: ${ad.price}</p>
        <p className="card-text">Tipo de Mascota: {ad.petType}</p>
        <p className="card-text">Recibo en domicilio: {ad.receiveAtHome ? 'Sí' : 'No'}</p>
        <p className="card-text">Busco a domicilio: {ad.searchAtHome ? 'Sí' : 'No'}</p>
      </div>
    </div>
  );
}
