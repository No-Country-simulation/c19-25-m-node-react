import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    direccion: "",
    localidad: "",
    provincia: "",
    telefono: "",
    fecha_nac: "",
    imgPerfil: "", // con 5 tipos de imagen
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hola mundo");
    try {
      console.log("Ha entrado en try");
      const response = await axios.post(
        `${backendUrl}/usuario/registrar`,
        formData
      );
      console.log(response);
      console.log("Usuario registrado:", response.data);
      // Redireccionar al usuario a Log-in
      navigate("/login");
    } catch (error) {
      console.log("Ha entrado en catch");

      // Mostrar un pop-up que diga que ha pasado algo malo al registrarse

      // Imprimir en terminal
      console.error("Error registrando el usuario:", error);
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="mb-4">¡Hola!</h2>
      <h4 className="ms-2">
        Te invitamos a registrarte y formar parte de nuestra comunidad:
      </h4>
      <div className="border rounded p-0 mb-4 mt-3">
        <form onSubmit={handleSubmit} className="">
          <div className="form-group m-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="fecha_nac" className="form-label">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha_nac"
              name="fecha_nac"
              value={formData.fecha_nac}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
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
          <div className="form-group m-3">
            <label htmlFor="direccion" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="localidad" className="form-label">
              Localidad
            </label>
            <input
              type="text"
              className="form-control"
              id="localidad"
              name="localidad"
              value={formData.localidad}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="provincia" className="form-label">
              Provincia
            </label>
            <input
              type="text"
              className="form-control"
              id="provincia"
              name="provincia"
              value={formData.provincia}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <fieldset disabled className="m-3">
            <div className="mb-3">
              <label for="disabledTextInput" className="form-label">
                País de residencia
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Argentina (De momento solo operamos en Argentina, pronto llegaremos al mundo entero)"
              />
            </div>
          </fieldset>
          
          <div className="form-group m-3">
            <label htmlFor="imgPerfil" className="form-label">
              Imagen de Perfil
            </label>
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="imgPerfil"
                  id="avatar-man"
                  value="https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="avatar-man">
                  <img src="https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg" alt="Avatar Man" width="50" />
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="imgPerfil"
                  id="basic-shape"
                  value="https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="basic-shape">
                  <img src="https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg" alt="Basic Shape" width="50" />
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="imgPerfil"
                  id="geek-avatar"
                  value="https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="geek-avatar">
                  <img src="https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg" alt="Geek Avatar" width="50" />
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="imgPerfil"
                  id="lady-avatar"
                  value="https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="lady-avatar">
                  <img src="https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg" alt="Lady Avatar" width="50" />
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="imgPerfil"
                  id="lady-avatar-2"
                  value="https://images.freeimages.com/images/large-previews/cd5/lady-avatar-1632969.jpg"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="lady-avatar-2">
                  <img src="https://images.freeimages.com/images/large-previews/cd5/lady-avatar-1632969.jpg" alt="Lady Avatar 2" width="50" />
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="imgPerfil"
                  id="woman-avatar"
                  value="https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="woman-avatar">
                  <img src="https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg" alt="Woman Avatar" width="50" />
                </label>
              </div>
            </div>
          </div>

          <div className="container-fluid m-0 rounded-bottom bg-secondary-subtle d-flex justify-content-end">
            <button type="submit" className="btn btn-success my-3">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
