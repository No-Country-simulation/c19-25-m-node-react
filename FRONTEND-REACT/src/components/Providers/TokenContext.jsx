import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const TokenContext = createContext();

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [dataUsuario, setDataUsuario] = useState({});

  useEffect(() => {
    const verificarAutenticacion = async () => {
      try {
        console.log("Iniciando verificación de autenticación");
        const response = await axios.get(`${backendUrl}/usuario/verificar`, {
          withCredentials: true,
        });

        console.log("Respuesta recibida:", response.data);

        if (response.data) {
          setToken(response.data._id);
        } else {
          console.log("No se recibió token en la respuesta");
          setToken("");
          setDataUsuario(null);
        }
      } catch (error) {
        console.error(
          "Error al verificar autenticación:",
          error.response ? error.response.data : error.message
        );
        setToken("");
        setDataUsuario(null);
      }
    };

    verificarAutenticacion();
  }, []);

  useEffect(() => {
    const obtenerDatosUsuario = async () => {
      if (token) {
        try {
          const userResponse = await axios.get(
            `${backendUrl}/usuario/${token}`,
            {
              withCredentials: true,
            }
          );
          console.log("Datos del usuario:", userResponse.data);
          setDataUsuario(userResponse.data);
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);
          setDataUsuario(null);
        }
      }
    };

    obtenerDatosUsuario();
  }, [token]);

  return (
    <TokenContext.Provider
      value={{ token, setToken, dataUsuario, setDataUsuario }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
