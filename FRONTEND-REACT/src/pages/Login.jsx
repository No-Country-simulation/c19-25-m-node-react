import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../components/Providers/AppContext';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Login = () => {

    const navigate = useNavigate();

    const navigateToRegistro = () => {
        navigate('/registrar');
    }
    const navigateToHome = () => {
        navigate('/home');
    }

    const context = useContext(AppContext);

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
            const response = await axios.post(`${backendUrl}/usuario/login`, formData);
            console.log('Inicio de sesión exitoso:', response.data);
            // Guardar el token
            context.setToken(true);
            console.log(response.data.token)
            console.log(context.token)
            //Hacer llamada a la base de datos con el token
            // context.setDataUsuario(response.data.dataUsuario)
            // Redirigir al usuario a Home
            navigateToHome()

        } catch (error) {
            // Mostrar un pop-up que diga que ha pasado algo malo al loguearse y hacer focus en el que esté mal.

            // Imprimir en terminal
            console.error('Error registrando el usuario:', error);
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
                        <button type="button" className="btn btn-primary my-3 me-4" onClick={navigateToRegistro} >No tengo cuenta</button>
                        <button type="submit" className="btn btn-success my-3" for='logInForm'>Iniciar Sesión</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;
