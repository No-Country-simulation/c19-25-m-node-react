import React, { useContext, useState, useEffect } from "react";
import CrearAnuncio from "../components/CrearAnuncio";
import CardAnuncio from "../components/CardAnuncio";
import { TokenContext } from "../components/Providers/TokenContext";
import { useNavigate } from "react-router-dom";

const Anuncios = () => {
  const context = useContext(TokenContext);
  const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

  const [anuncio, setAnuncio] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    selectedPets: {
      Perros: false,
      Gatos: false,
      Pajaros: false,
      Peces: false,
    },
    serviceOptions: {
      Voyasudomicilio: false,
      Soloenmidomicilio: false,
    },
    selectedRols: {
      Paseador: false,
      Cuidador: false,
    },
    distanciaMaxima: "",
    fechaInicio: "",
    fechaFin: "",
    direccion: context.dataUsuario?.localidad || "", // Coger de la base de datos
    nombre: context.dataUsuario?.nombre || "", // Coger de la base de datos
    apellido: context.dataUsuario?.apellido || "", // Coger de la base de datos
    imgperfil: context.dataUsuario?.imgperfil || "",
    cuidador: context.dataUsuario?.cuidador || false,
  });

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    redirect: "",
  });

  useEffect(() => {
    if (!context.token) {
      setModalContent({
        title: "Usuario no logueado",
        message:
          "No estás logueado. Por favor, inicia sesión para publicar un anuncio.",
        messageButton: "Ir a Login",
        redirect: "/login",
      });
      setShowModal(true);
    } else if (!context.dataUsuario.cuidador) {
      setModalContent({
        title: "No eres cuidador",
        message:
          "Todavía no eres cuidador. Por favor, completa el formulario para hacerte cuidador.",
        messageButton: "Hacerme Cuidador",
        redirect: "/form-registro",
      });
      setShowModal(true);
    }
  }, [context.token, context.dataUsuario]);

  const handleAnuncioChange = (newAnuncio) => {
    setAnuncio((prevAnuncio) => ({
      ...prevAnuncio,
      ...newAnuncio,
    }));
  };

  const handleClose = () => {
    setShowModal(false);
    navigate(modalContent.redirect); // Usa navigate en lugar de history.push
  };

  return (
    <div className="container min-height-vh d-flex flex-column justify-content-center align-items-center">
      <div className="text-start w-100 my-4">
        <h2>Publica aquí tu nuevo anuncio: </h2>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="row mb-5">
          <div className="col-12 col-lg-6 my-lg-auto">
            <CrearAnuncio
              anuncio={anuncio}
              onAnuncioChange={handleAnuncioChange}
            />
          </div>
          <div className="col-12 col-lg-6 mt-5 my-lg-auto">
            <CardAnuncio anuncio={anuncio} />
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalContent.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                />
              </div>
              <div className="modal-body">
                <p>{modalContent.message}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClose}
                >
                  {modalContent.messageButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Anuncios;
