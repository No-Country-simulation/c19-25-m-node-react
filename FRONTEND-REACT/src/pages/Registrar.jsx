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
    imagen_perfil: "", // con 6 tipos de imagen
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData); // Verifica los datos del formulario antes de enviarlos

    try {
      console.log("Intentando registrar usuario...");
      const response = await axios.post(
        `${backendUrl}/usuario/registrar`,
        formData
      );
      console.log("Respuesta del servidor:", response); // Verifica la respuesta del servidor
      console.log("Usuario registrado:", response.data);

      // Redireccionar al usuario a Log-in
      navigate("/login");
    } catch (error) {
      console.log("Error al registrar usuario");

      // Mostrar un pop-up que diga que ha pasado algo malo al registrarse
      alert("Hubo un problema al registrar el usuario. Inténtelo nuevamente.");

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
          {/* Campos de texto del formulario */}
          {[
            { id: "nombre", label: "Nombre", type: "text" },
            { id: "apellido", label: "Apellido", type: "text" },
            { id: "fecha_nac", label: "Fecha de Nacimiento", type: "date" },
            { id: "email", label: "Email", type: "email" },
            { id: "password", label: "Password", type: "password" },
            { id: "direccion", label: "Dirección", type: "text" },
            { id: "localidad", label: "Localidad", type: "text" },
            { id: "provincia", label: "Provincia", type: "text" },
            { id: "telefono", label: "Teléfono", type: "tel" },
          ].map((field) => (
            <div className="form-group m-3" key={field.id}>
              <label htmlFor={field.id} className="form-label">
                {field.label}
              </label>
              <input
                type={field.type}
                className="form-control"
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          {/* Campo de selección de imagen de perfil */}
          <div className="form-group m-3">
            <label htmlFor="imgPerfil" className="form-label">
              Imagen de Perfil
            </label>
            <div className="d-flex justify-content-between align-items-center">
              {[
                {
                  id: "avatar-man",
                  url: "https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg",
                  alt: "Avatar Man",
                },
                {
                  id: "basic-shape",
                  url: "https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg",
                  alt: "Basic Shape",
                },
                {
                  id: "geek-avatar",
                  url: "https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg",
                  alt: "Geek Avatar",
                },
                {
                  id: "lady-avatar",
                  url: "https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg",
                  alt: "Lady Avatar",
                },
                {
                  id: "lady-avatar-2",
                  url: "https://images.freeimages.com/images/large-previews/cd5/lady-avatar-1632969.jpg",
                  alt: "Lady Avatar 2",
                },
                {
                  id: "woman-avatar",
                  url: "https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg",
                  alt: "Woman Avatar",
                },
              ].map((avatar) => (
                <div className="form-check" key={avatar.id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="imgPerfil"
                    id={avatar.id}
                    value={avatar.url}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor={avatar.id}>
                    <img src={avatar.url} alt={avatar.alt} width="50" />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <fieldset disabled className="m-3">
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
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
