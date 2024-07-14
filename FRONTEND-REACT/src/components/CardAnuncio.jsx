import React from "react";

export default function CardAnuncio () {
    return (
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Diego</h5>
                <p className="card-text">Disponible para cuidados barrio Palermo</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
    )
}