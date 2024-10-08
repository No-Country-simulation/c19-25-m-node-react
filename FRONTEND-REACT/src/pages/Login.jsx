import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../components/Providers/TokenContext";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(TokenContext);

  const [formData, setFormData] = useState({
    usuario: "",
    password: "",
  });

  const [error, setError] = useState(""); // Estado para manejar el mensaje de error
  const [loading, setLoading] = useState(false); // Estado para manejar el modal de carga

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Resetear el error cuando el usuario escribe
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Mostrar el modal de carga
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

      if (response.data) {
        context.setToken(response.data._id);

        const userResponse = await axios.get(
          `${backendUrl}/usuario/${response.data._id}`, 
          {
            withCredentials: true,
          }
        );

        console.log(userResponse);
        context.setDataUsuario(userResponse.data);

        console.log("Datos del usuario:", userResponse.data);
        console.log("Inicio de sesión exitoso");
        navigate("/home");
      } else {
        console.error("No se recibió el token en la respuesta");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("No se ha podido encontrar el usuario o la contraseña"); // Establecer el mensaje de error
      } else {
        console.error("Error iniciando sesión:", error);
      }
    } finally {
      setLoading(false); // Ocultar el modal de carga
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
          {error && (
            <div className="alert alert-danger mx-3 my-2">
              {error}
            </div>
          )}
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
      {loading && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body d-flex justify-content-center align-items-center">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
