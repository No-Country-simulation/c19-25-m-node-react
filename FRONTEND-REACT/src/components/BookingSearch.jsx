import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import CardAnuncio from "./CardAnuncio"; // Importa CardAnuncio

const STEP = 0.25; // Paso del deslizador
const MIN = 0; // Valor mínimo del deslizador
const MAX = 5; // Valor máximo del deslizador

export default function BookingSearch() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú lateral
  const [city, setCity] = useState("");
  const [petType, setPetType] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingRange, setRatingRange] = useState([MIN, MAX]);
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    const searchParams = {
      city,
      petType,
      priceFilter,
      ratingMin: ratingRange[0],
      ratingMax: ratingRange[1],
      startDateTime,
      endDateTime,
    };

    const queryParams = new URLSearchParams(searchParams).toString();
    const url = `/api/search?${queryParams}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al buscar datos");
        }
        return response.json();
      })
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error de red:", error);
      });
  };

  return (
    <div className="container d-block p-0 my-0">
      <div
        className={`bg-light p-3 w-100 row ${
          isOpen ? "d-block" : "d-none"
        } col-md-4 col-lg-3`}
        style={{ overflowY: "auto" }}
      >
        <form onSubmit={handleSearch} className="mb-4 row">
          <div className="mb-3 col-12 col-lg-4">
            <label htmlFor="city" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="Ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 col-12 col-lg-4">
            <label htmlFor="petType" className="form-label">
              Tipo de Mascota
            </label>
            <select
              className="form-select"
              id="petType"
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
              required
            >
              <option value="">Selecciona un tipo de mascota</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Pájaro">Pájaro</option>
              <option value="Pez">Pez</option>
            </select>
          </div>
          <div className="mb-3 col-12 col-lg-4">
            <label htmlFor="priceFilter" className="form-label">
              Precio
            </label>
            <input
              type="number"
              className="form-control"
              id="priceFilter"
              placeholder="Precio"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            />
          </div>
          <div className="mb-4 col-12 col-lg-4">
            <label className="form-label">Valoración</label>
            <div className="d-flex align-items-center">
              <span className="me-4">0</span>
              <div className="flex-grow-1">
                <Range
                  values={ratingRange}
                  step={STEP}
                  min={MIN}
                  max={MAX}
                  onChange={(values) => setRatingRange(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      onClick={props.onClick}
                      onMouseDown={props.onMouseDown}
                      onTouchStart={props.onTouchStart}
                      ref={props.ref}
                      style={{
                        ...props.style,
                        height: "6px",
                        width: "100%",
                        borderRadius: "4px",
                        background: "rgb(245,205,71)",
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props, isDragged }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "24px",
                        width: "24px",
                        borderRadius: "50%",
                        backgroundColor: "black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 2px 6px #AAA",
                      }}
                    >
                      <i className="fa-regular fa-star text-warning"></i>
                    </div>
                  )}
                />
              </div>
              <span className="ms-4">5</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Min: {ratingRange[0].toFixed(2)} estrellas</span>
              <span>Max: {ratingRange[1].toFixed(2)} estrellas</span>
            </div>
          </div>
          <div className="mb-3 col-12 col-lg-4">
            <label htmlFor="startDateTime" className="form-label">
              Fecha y Hora de Inicio
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="startDateTime"
              value={startDateTime}
              onChange={(e) => setStartDateTime(e.target.value)}
            />
          </div>
          <div className="mb-3 col-12 col-lg-4">
            <label htmlFor="endDateTime" className="form-label">
              Fecha y Hora de Fin
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="endDateTime"
              value={endDateTime}
              onChange={(e) => setEndDateTime(e.target.value)}
            />
          </div>
          <div className="col-12 col-lg-4">
            <button type="submit" className="btn btn-outline-success w-100">
              Buscar
            </button>
          </div>
        </form>
      </div>

      <div className={`container ${!isOpen && "mt-4"} `}>
        <button
          className="btn btn-outline-secondary mb-4"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Cerrar Filtros" : "Mostrar Filtros"}
        </button>
      </div>

      <div className={`container col-10 col-lg-4`}>
        {searchResults.length > 0 && (
          searchResults.map((anuncio) => (
            <CardAnuncio key={anuncio.id} anuncio={anuncio} />
          ))
        )}
      </div>
    </div>
  );
}
