import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditarDatosPerfil from "../components/EditarDatosPerfil";
import { TokenContext } from "../components/Providers/TokenContext";
import axios from "axios";
import ModalComponent from "../components/ModalComponent";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Perfil() {
  const navigate = useNavigate();
  const context = useContext(TokenContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false); // Estado para manejar el acordeón

  const datosUsuario = context.dataUsuario;

  useEffect(() => {
    if (!context.token) {
      navigate("/login");
    }
  }, [context.token, navigate]);

  const handleButtonClick = () => {
    navigate("/form-registro");
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/usuario/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        context.setToken("");
        context.setDataUsuario(null);
        navigate("/login");
        console.log("Logout Exitoso");
      } else {
        alert("Hubo un problema al ejecutar cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleLogoutConfirmation = () => {
    setShowLogoutModal(true);
  };

  const handleModalClose = () => {
    setShowLogoutModal(false);
  };

  const handleModalConfirm = () => {
    logout();
    setShowLogoutModal(false);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen); // Alternar el estado del acordeón
  };

  return (
    <>
      <div className="container mb-5 mt-3 min-height-vh">
        <div className="text-end mb-4 d-flex justify-content-center justify-content-lg-end align-items-center" >
          <div className="accordion w-100" >
            <div className="accordion-item d-flex d-lg-inline-block text-lg-center flex-column justify-content-center align-items-center" >
              <h2 className="accordion-header w-100" >
                <button
                  className={`accordion-button ${isAccordionOpen ? "" : "collapsed"}`}
                  type="button"
                  onClick={toggleAccordion} // Alternar el estado al hacer clic
                >
                  Opciones de perfil
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${isAccordionOpen ? "show" : ""}`}
              >
                <div className="accordion-body">
                  {!context.dataUsuario.cuidador && (
                    <button
                      type="button"
                      className="btn btn-outline-success fs-3 mx-auto mx-lg-5 my-auto"
                      onClick={handleButtonClick}
                    >
                      Quiero convertirme en cuidador
                    </button>
                  )}
                  {context.dataUsuario.cuidador && (
                    <h3 className="bg-green w-auto p-2 p-lg-3 rounded-3 mx-auto my-auto my-lg-3">
                      Ya eres paseador/-a o cuidador/-a
                    </h3>
                  )}
                  <button
                    type="button"
                    className="btn btn-danger fs-5 mt-3 mx-auto my-lg-auto"
                    onClick={handleLogoutConfirmation}
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <EditarDatosPerfil
            imagenProfile={datosUsuario.imgperfil}
            nombre={datosUsuario.nombre}
            apellido={datosUsuario.apellido}
            email={datosUsuario.email}
            direccion={datosUsuario.direccion}
            localidad={datosUsuario.localidad}
            provincia={datosUsuario.provincia}
            telefono={datosUsuario.telefono}
            fecha_nac={datosUsuario.fecha_nac}
          />
        </div>
      </div>
      {showLogoutModal && (
        <ModalComponent
          idModal="logoutModal"
          classNameModal="modal fade"
          tittleModal="Confirmar Cierre de Sesión"
          bodyModal="¿Estás seguro de que quieres cerrar sesión?"
          classNameBotonCerrar="btn btn-success"
          botonCerrar="Cancelar"
          classNameBotonEnviar="btn btn-danger"
          botonEnviar="Confirmar"
          onClickEnviar={handleModalConfirm}
        />
      )}
    </>
  );
}
