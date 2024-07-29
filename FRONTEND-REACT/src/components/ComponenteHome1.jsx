import React from "react";

export default function ComponenteHome1({ image, tittle, subtittle }) {
  return (
    <div className="d-flex flex-column col-12 col-lg-4 col-md-12 text-center align-items-center mt-3 mb-5">
      <img
        src={image}
        alt="Imagen del componente Home"
        className="mb-3 rounded square-250 border"
      />
      <div className="bg-green rounded-4 w-75 p-4">
        <h4 className="fs-3"><strong>{tittle}</strong></h4>
        <br />
        <p className="fs-4">{subtittle}</p>
      </div>
    </div>
  );
}
