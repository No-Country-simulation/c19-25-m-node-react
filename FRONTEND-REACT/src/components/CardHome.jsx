import React from 'react';

export default function CardHome({ profileImage, name, date }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={profileImage} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Date: {date}</p>
        </div>
      </div>
    </div>
  );
}

