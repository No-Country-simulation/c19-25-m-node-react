import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EditarDatosPerfil from '../components/EditarDatosPerfil';
import AppContext from '../components/Providers/AppContext.jsx';

export default function Perfil() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/form-registro');
    };

    const context = useContext(AppContext)

    const cerrarSesion = () => {
        context.setToken(false);
        navigate('/login');
    }
    const datosUsuario = [
        {
            imagenProfile: "https://placehold.co/250",
            nombre: 'Pepito',
            apellido: 'Palotes Canarias',
            email: 'pepitodelospalotes@gmail.com',
            password: 'Estoesunacontraseña',
            direccion: 'Avenida Falsa, 14',
            localidad: 'Cuernavaca',
            provincia: 'Buenos Aires',
            telefono: '+54 9 11 1234 5678',
            fecha_nac: '10/04/1995',
        }
    ]

    const usuario = datosUsuario[0];

    return (
        <>
            <div className='container mb-5 mt-3 min-height-vh'> 
                <h1>Perfil</h1>
                <div>
                    <EditarDatosPerfil
                        imagenProfile={usuario.imagenProfile}
                        nombre={usuario.nombre}
                        apellido={usuario.apellido}
                        email={usuario.email}
                        direccion={usuario.direccion}
                        localidad={usuario.localidad}
                        provincia={usuario.provincia}
                        telefono={usuario.telefono}
                        fecha_nac={usuario.fecha_nac}
                    />
                </div>
                <div className='text-center '>
                    <button type="button" class="btn btn-outline-secondary fs-1" onClick={handleButtonClick}>Quiero convertirme en cuidador</button>
                </div>
                <div className='text-center '>
                    <button type="button" class="btn btn-danger fs-3 my-5" onClick={cerrarSesion}>Cerrar Sesión</button>
                </div>
            </div>
        </>
    );
}