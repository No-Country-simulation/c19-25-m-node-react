import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ModalComponent from './ModalComponent';

const CrearAnuncio = ({ anuncio, onAnuncioChange }) => {
  const [mostrarModalEnvio, setMostrarModalEnvio] = useState(false);
  const [error, setError] = useState('');
  const [formError, setFormError] = useState('');
  const [minStartDate, setMinStartDate] = useState(getCurrentDateTime());
  const navigate = useNavigate();

  function getCurrentDateTime() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setMinStartDate(getCurrentDateTime());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const returnToHome = () => {
    navigate('/home');
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'fechaInicio') {
      // Ensure the selected start date is not in the past
      if (value < minStartDate) {
        setFormError('La fecha de inicio no puede ser en el pasado.');
        return;
      }
      setFormError('');
    }
    onAnuncioChange({ [id]: value });
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    onAnuncioChange({
      selectedPets: {
        ...anuncio.selectedPets,
        [id]: checked
      }
    });
  };

  const handleServiceOptionChange = (event) => {
    const { id, checked } = event.target;
    onAnuncioChange({
      serviceOptions: {
        ...anuncio.serviceOptions,
        [id]: checked
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const atLeastOnePetSelected = Object.values(anuncio.selectedPets).some((isSelected) => isSelected);
    const atLeastOneServiceSelected = Object.values(anuncio.serviceOptions).some((isSelected) => isSelected);

    if (!atLeastOnePetSelected) {
      setFormError('Por favor, selecciona al menos un tipo de mascota que estás dispuesto a cuidar.');
    } else if (!atLeastOneServiceSelected) {
      setFormError('Por favor, selecciona al menos una opción de servicio.');
    } else if (anuncio.fechaInicio < minStartDate) {
      setFormError('La fecha de inicio no puede ser en el pasado.');
    } else if (anuncio.fechaFin <= anuncio.fechaInicio) {
      setFormError('La fecha de fin debe ser posterior a la fecha de inicio.');
    } else {
      setFormError('');
      setMostrarModalEnvio(true);
    }
  };

  const handleConfirmar = async () => {
    try {
      const response = await axios.post('http://tu-backend.com/guardarDatos', anuncio);
      console.log('Datos enviados correctamente', response.data);
      returnToHome();
    } catch (error) {
      setError(error.message);
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="container">
      <div className="card p-0">
        <div className="card-body">
          <h5 className="card-title">Crea aquí tu Anuncio:</h5>
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">Título del Anuncio</label>
              <input type="text" className="form-control" id="titulo" value={anuncio.titulo} onChange={handleInputChange} required />
            </div>

            <div>
              <label htmlFor="tipoMascota" className="form-label">Tipo de mascota que estás dispuesto a cuidar:</label>
              <div id="tipoMascota">
                {['Perros', 'Gatos', 'Pajaros', 'Peces'].map((pet) => (
                  <div className="form-check form-check-inline" key={pet}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={pet}
                      value={pet}
                      checked={anuncio.selectedPets[pet]}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor={pet}>{pet}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="serviceOptions" className="form-label">Opciones de servicio:</label>
              <div id="serviceOptions">
                {['Voy a su domicilio', 'Solo en mi domicilio'].map((option) => (
                  <div className="form-check form-check-inline" key={option}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={option.replace(/\s+/g, '')}
                      value={option}
                      checked={anuncio.serviceOptions[option.replace(/\s+/g, '')]}
                      onChange={handleServiceOptionChange}
                    />
                    <label className="form-check-label" htmlFor={option.replace(/\s+/g, '')}>{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Observaciones del Anuncio</label>
              <textarea className="form-control" id="descripcion" rows="3" value={anuncio.observaciones} onChange={handleInputChange} required></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="precio" className="form-label">Precio por hora</label>
              <input type="number" className="form-control" id="precio" value={anuncio.precioHora} onChange={handleInputChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="distanciaMaxima" className="form-label">¿Cuánto estás dispuesto a alejarte de tu dirección en km?</label>
              <input type="number" className="form-control" id="distanciaMaxima" value={anuncio.distanciaMaxima} onChange={handleInputChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="fechaInicio" className="form-label">Fecha y hora de inicio del servicio</label>
              <input
                type="datetime-local"
                className="form-control"
                id="fechaInicio"
                value={anuncio.fechaInicio}
                onChange={handleInputChange}
                min={minStartDate}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="fechaFin" className="form-label">Fecha y hora de fin del servicio</label>
              <input
                type="datetime-local"
                className="form-control"
                id="fechaFin"
                value={anuncio.fechaFin}
                onChange={handleInputChange}
                min={anuncio.fechaInicio || minStartDate}
                required
              />
            </div>

            <button type="submit" className="btn btn-outline-success">Crear Anuncio</button>
          </form>
        </div>
      </div>

      {mostrarModalEnvio && (
        <ModalComponent
          classNameModal="modal fade"
          idModal="modalConfirmacionEnvioAnuncio"
          tittleModal="¿Seguro que quieres publicar el anuncio?"
          bodyModal="Asegúrate de que todos los campos están bien rellenos"
          classNameBotonCerrar="btn btn-outline-danger"
          botonCerrar="Cerrar"
          classNameBotonEnviar="btn btn-outline-success"
          onClickEnviar={handleConfirmar}
          botonEnviar="Publicar anuncio"
        />
      )}

      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {formError && <div className="alert alert-danger mt-3">{formError}</div>}
    </div>
  );
};

export default CrearAnuncio;