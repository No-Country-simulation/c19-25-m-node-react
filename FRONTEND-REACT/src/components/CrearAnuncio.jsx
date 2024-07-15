import React from 'react';

const CreateAd = () => {
  return (
    <div className="container">
      <h2>Crear Anuncio</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Formulario de Creación de Anuncio</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">Título del Anuncio</label>
              <input type="text" className="form-control" id="titulo" />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción del Anuncio</label>
              <textarea className="form-control" id="descripcion" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">Precio</label>
              <input type="number" className="form-control" id="precio" />
            </div>
            <button type="submit" className="btn btn-primary">Crear Anuncio</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAd;
