import React, { useState } from 'react';

import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        usuario: '',
        password: '',
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
            const response = await axios.post('http://localhost:4000/usuario/login', formData);
            console.log('Inicio de sesión exitoso:', response.data);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="container min-height-vh max-w-720 d-flex flex-column justify-content-center">
            <h2 className="mb-4">Inicio de Sesión:</h2>
            <div className='container max-w-720 border rounded p-0'>
                <form onSubmit={handleSubmit} className='mt-2' id='logInForm'>
                    <div className="form-group m-3 ">
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

                    <div className='container-fluid mt-3 rounded-bottom bg-secondary-subtle d-flex justify-content-end'>
                        <button type="submit" className="btn btn-success my-3" for='logInForm'>Iniciar Sesión</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;
