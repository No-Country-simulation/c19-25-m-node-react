import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditarDatosPerfil from "../components/EditarDatosPerfil";
import { TokenContext } from "../components/Providers/TokenContext";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Perfil() {
  const navigate = useNavigate();
  const context = useContext(TokenContext);

  const datosUsuario = context.dataUsuario

  const handleButtonClick = () => {
    navigate("/form-registro");
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/usuario/logout`,
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        context.setToken("");
        context.setDataUsuario(null);
        navigate("/login");
      } else {
        alert("Hubo un problema al ejecutar cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <>
      <div className="container mb-5 mt-3 min-height-vh">
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
        <div className="text-center ">
          <button
            type="button"
            className="btn btn-outline-secondary fs-1"
            onClick={handleButtonClick}
          >
            Quiero convertirme en cuidador
          </button>
        </div>
        <div className="text-center ">
          <button
            type="button"
            className="btn btn-danger fs-3 my-5"
            onClick={logout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
}
