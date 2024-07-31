import React, { useContext, useState, useEffect } from "react";
import CrearAnuncio from "../components/CrearAnuncio";
import CardAnuncio from "../components/CardAnuncio";
import { TokenContext } from "../components/Providers/TokenContext";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";

const Anuncios = () => {
  const context = useContext(TokenContext);
  const navigate = useNavigate();

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
        redirect: "/login",
        messageButton: "Ir a Login",
      });
      setShowModal(true);
    } else if (!context.dataUsuario.cuidador) {
      setModalContent({
        title: "Ups, parece que nos falta un paso",
        message:
          "No te tenemos registrado como paseador/-a o cuidador/-a. Necesitamos hacerte unas preguntas antes de poder crear un anuncio.",
        redirect: "/form-registro",
        messageButton: "Convertirme en Cuidador",
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

  const handleModalConfirm = () => {
    navigate(modalContent.redirect);
  };

  return (
    <div className="container min-height-vh d-flex flex-column justify-content-center align-items-center">
      <div className="text-start w-100 my-4 bg-orange w-auto p-3 rounded-4">
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
        <ModalComponent
          idModal="userCheckModal"
          classNameModal="modal fade show"
          tittleModal={modalContent.title}
          bodyModal={modalContent.message}
          classNameBotonEnviar="btn btn-outline-success"
          botonEnviar={modalContent.messageButton}
          onClickEnviar={handleModalConfirm}
        />
      )}
    </div>
  );
};

export default Anuncios;
