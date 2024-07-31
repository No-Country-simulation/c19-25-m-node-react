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

  const datosUsuario = context.dataUsuario;

  useEffect(() =>{
    if (!context.token){
      navigate('/login')
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
        console.log("Logout Exitoso")
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

  return (
    <>
      <div className="container mb-5 mt-3 min-height-vh">
        <div className="text-end mb-4 d-flex justify-content-end align-items-center">
          {context.dataUsuario.cuidador && (
            <button
              type="button"
              className="btn btn-outline-success fs-3 me-3"
              onClick={handleButtonClick}
            >
              Quiero convertirme en cuidador
            </button>
          )}
          {context.dataUsuario.cuidador && (
            <h2 className="bg-orange w-auto p-1 p-lg-3 rounded-3 me-3">
              Ya eres cuidador
            </h2>
          )}
          <button
            type="button"
            className="btn btn-warning fs-5"
            onClick={handleLogoutConfirmation} // Abre el modal de confirmación
          >
            Cerrar Sesión
          </button>
        </div>
        <h1>Perfil</h1>
        <div>
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
