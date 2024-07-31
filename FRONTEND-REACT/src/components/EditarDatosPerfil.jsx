import React, { useState } from "react";
import axios from "axios";

export default function EditarDatosPerfil(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  // Formatear la fecha de nacimiento para poder mostrarla

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formattedDate = formatDate(props.fecha_nac);

  // Fin formateo de la fecha nac

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const confirmed = window.confirm(
      "¿Estás seguro de querer editar los datos de tu perfil?"
    );
    if (confirmed) {
      try {
        const response = await axios.post(
          "http://localhost:4000/usuario/registrar",
          formData
        );
        window.alert("Los datos no han conseguido cargarse");
        console.log("Usuario editado:", response.data);
      } catch (error) {
        // Mostrar un pop-up que diga que ha pasado algo malo al registrarse

        // Imprimir en terminal
        window.alert("Los datos no han conseguido cargarse");
        console.error("Error al editar los datos el usuario:", error);
      }
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="mb-4 bg-orange rounded-3 p-3">
        ¡Hola {props.nombre}, si lo deseas, aquí puedes cambiar algunos datos de tu perfil.
      </h2>
      <div className="border rounded p-0 mb-4 mt-3">
        <img
          src={props.imagenProfile}
          alt={`${props.nombre} ${props.apellido}`}
          className="m-3 w-25"
        />
        <form onSubmit={handleSubmitEdit} className="">
          <fieldset disabled className="m-3">
            <div className="form-group m-3">
              <label htmlFor="imagenProfile" className="form-label">
                Subir nueva foto de perfil
              </label>
              <input
                type="file"
                className="form-control"
                id="imagenProfile"
                name="imagenProfile"
                readOnly
              />
            </div>
          </fieldset>

          <fieldset disabled className="m-3">
            <div className="mb-3">
              <label for="nombreDisabled" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="nombreDisabled"
                className="form-control"
                placeholder={props.nombre}
                readOnly              />
            </div>
          </fieldset>

          {/* <div className="form-group m-3">
                        <label htmlFor="nombre" className='form-label'>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            name="nombre"
                            value={props.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div> */}

          <fieldset disabled className="m-3">
            <div className="mb-3">
              <label for="apellidoDisabled" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                id="apellidoDisabled"
                className="form-control"
                placeholder={props.apellido}
                readOnly              />
            </div>
          </fieldset>

          {/* <div className="form-group m-3">
                        <label htmlFor="apellido" className='form-label'>Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="apellido"
                            name="apellido"
                            value={props.apellido}
                            onChange={handleChange}
                            required
                        />
                    </div> */}

          <fieldset disabled className="m-3">
            <div className="mb-3">
              <label for="fechaNacDisabled" className="form-label">
                Fecha de Nacimiento
              </label>
              <input
                type="text"
                id="fechaNacDisabled"
                className="form-control"
                placeholder={formattedDate}
                readOnly              />
            </div>
          </fieldset>

          {/* <div className="form-group m-3">
                        <label htmlFor="fechaNacimiento" className='form-label'>Fecha de Nacimiento</label>
                        <input
                            type="date"
                            className="form-control"
                            id="fechaNacimiento"
                            name="fecha_nac"
                            value={props.fechaNacimiento}
                            onChange={handleChange}
                            required
                        />
                    </div> */}

          <fieldset disabled className="m-3">
            <div className="mb-3">
              <label for="emailDisabled" className="form-label">
                Email
              </label>
              <input
                type="text"
                id="emailDisabled"
                className="form-control"
                placeholder={props.email}
                readOnly              />
            </div>
          </fieldset>

          {/* <div className="form-group m-3">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={props.email}
                            onChange={handleChange}
                            required
                        />
                    </div> */}

          <div className="form-group m-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={props.password}
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
              value={props.direccion}
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
              value={props.localidad}
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
              value={props.provincia}
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
              value={props.telefono}
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

          <div className="container-fluid m-0 rounded-bottom bg-secondary-subtle d-flex justify-content-end">
            <button type="submit" className="btn btn-success my-3 ">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
