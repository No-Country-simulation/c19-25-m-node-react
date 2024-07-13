import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        direccion: '',
        localidad: '',
        provincia: '',
        telefono: '',
        fecha_nac: '', // Nuevo campo para la fecha de nacimiento
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
            const response = await axios.post('http://localhost:4000/usuario/registrar', formData);
            console.log('Usuario registrado:', response.data);
        } catch (error) {
            console.error('Error registrando el usuario:', error);
        }
    };

    return (
        <div className="container mt-3">
            <h2 className="mb-4">¡Hola!</h2>
            <h4 className='ms-2'>Te invitamos a registrarte y formar parte de nuestra comunidad:</h4>
            <div className='border rounded p-0 mb-4 mt-3'>
                <form onSubmit={handleSubmit} className='mx-4'>
                    <div className="form-group">
                        <label htmlFor="nombre" className='form-label'>Nombre</label>
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
                    <div className="form-group">
                        <label htmlFor="apellido" className='form-label'>Apellido</label>
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
                    <div className="form-group">
                        <label htmlFor="fechaNacimiento" className='form-label'>Fecha de Nacimiento</label>
                        <input
                            type="date"
                            className="form-control"
                            id="fechaNacimiento"
                            name="fecha_nac"
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className='form-label'>Email</label>
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
                    <div className="form-group">
                        <label htmlFor="password" className='form-label'>Password</label>
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
                    <div className="form-group">
                        <label htmlFor="direccion" className='form-label'>Dirección</label>
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
                    <div className="form-group">
                        <label htmlFor="localidad" className='form-label'>Localidad</label>
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
                    <div className="form-group">
                        <label htmlFor="provincia" className='form-label'>Provincia</label>
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
                    <div className="form-group">
                        <label htmlFor="telefono" className='form-label'>Teléfono</label>
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
                    <fieldset disabled>
                        <div className="mb-3">
                            <label for="disabledTextInput" className="form-label">País de residencia</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Argentina (De momento solo operamos en Argentina, pronto llegaremos al mundo entero)" />
                        </div>
                    </fieldset>
                </form>
                <div className='container-fluid m-0 rounded-bottom bg-secondary-subtle d-flex justify-content-end'>
                    <button type="submit" className="btn btn-success my-3 ">Registrar</button>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
