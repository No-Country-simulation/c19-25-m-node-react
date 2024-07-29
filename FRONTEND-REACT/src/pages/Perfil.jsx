import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditarDatosPerfil from "../components/EditarDatosPerfil";
import { TokenContext } from "../components/Providers/TokenContext";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Perfil() {
  const navigate = useNavigate();
  const context = useContext(TokenContext);

  const datosUsuario = [
    {
      imagenProfile: "https://placehold.co/250",
      nombre: "Pepito",
      apellido: "Palotes Canarias",
      email: "pepitodelospalotes@gmail.com",
      password: "Estoesunacontraseña",
      direccion: "Avenida Falsa, 14",
      localidad: "Cuernavaca",
      provincia: "Buenos Aires",
      telefono: "+54 9 11 1234 5678",
      fecha_nac: "10/04/1995",
    },
  ];

  const usuario = datosUsuario[0];

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
            imagenProfile={usuario.imagenProfile}
            nombre={usuario.nombre}
            apellido={usuario.apellido}
            email={usuario.email}
            direccion={usuario.direccion}
            localidad={usuario.localidad}
            provincia={usuario.provincia}
            telefono={usuario.telefono}
            fecha_nac={usuario.fecha_nac}
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
