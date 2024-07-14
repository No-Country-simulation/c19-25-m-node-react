import React from "react";



export default function ComponenteHome1 ({ image, tittle, subtittle }) {
    
    return (
        <div className="d-flex flex-column col-lg-4 col-md-12 text-center align-items-center">
            <img src={image} alt="Imagen del componente Home" className="w-25 mb-3 rounded"/>
            <h4>{tittle}</h4>
            <p>{subtittle}</p>
        </div>
    )
}