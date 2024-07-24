import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { TokenContext } from "../components/Providers/TokenContext";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(TokenContext);
  const { setDataUsuario } = useContext(TokenContext);

  const [formData, setFormData] = useState({
    usuario: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendUrl}/usuario/login`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);

      if (response.data && response.data.token) {
        setToken(response.data.token);
        const decodedToken = jwtDecode(response.data.token);

        const userResponse = await axios.get(
          `${backendUrl}/usuario/${decodedToken.id}`,
          {
            headers: { Authorization: `Bearer ${response.data.token}` },
          }
        );

        setDataUsuario(userResponse.data);

        console.log("Datos del usuario:", decodedToken);
        console.log("Inicio de sesión exitoso");
        navigate("/home");
      } else {
        console.error("No se recibió el token en la respuesta");
      }
    } catch (error) {
      console.error("Error iniciando sesión:", error);
    }
  };

  const navigateToRegistro = () => {
    navigate("/registrar");
  };

  return (
    <div className="container min-height-vh max-w-720 d-flex flex-column justify-content-center">
      <h2 className="mb-4">Inicio de Sesión:</h2>
      <div className="container max-w-720 border rounded p-0">
        <form onSubmit={handleSubmit} className="mt-2" id="logInForm">
          <div className="form-group m-3">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="container-fluid mt-3 rounded-bottom bg-secondary-subtle d-flex justify-content-end">
            <button
              type="button"
              className="btn bg-azul my-3 me-4"
              onClick={navigateToRegistro}
            >
              No tengo cuenta
            </button>
            <button type="submit" className="btn btn-success my-3">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
