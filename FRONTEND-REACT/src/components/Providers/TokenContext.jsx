import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const TokenContext = createContext();

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [dataUsuario, setDataUsuario] = useState(null);

  useEffect(() => {
    const verificarAutenticacion = async () => {
      try {
        console.log("Iniciando verificación de autenticación");
        const response = await axios.get(`${backendUrl}/usuario/verificar`, {
          withCredentials: true,
        });

        console.log("Respuesta recibida:", response.data);

        if (response.data && response.data.token) {
          setToken(response.data.token);
          const decodedToken = jwtDecode(response.data.token);
          setDataUsuario(decodedToken);
          console.log("Autenticación exitosa:", decodedToken);
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

  return (
    <TokenContext.Provider
      value={{ token, setToken, dataUsuario, setDataUsuario }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
