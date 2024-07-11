import React from 'react';

export default function CardHome({ profileImage, name, date, rolUsuario }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={profileImage} className="card-img-top" alt={name} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Fecha de la reserva {date}</p>
          <h5 className="card-subtittle">{rolUsuario}</h5>
        </div>
      </div>
    </div>
  );
}

