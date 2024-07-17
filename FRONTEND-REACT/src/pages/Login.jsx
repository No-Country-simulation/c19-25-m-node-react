import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../components/Provider';

const Login = () => {

    const navigate = useNavigate();

    const navigateToRegistro = () => {
        navigate('/registrar');
    }
    
    const [token, setToken] = useContext (AppContext)

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
            // Redirigir al usuario a Home

            // Guardar el token en el contexto
            setToken(response.data.token);

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
