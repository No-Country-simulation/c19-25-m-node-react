import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditarDatosPerfil from '../components/EditarDatosPerfil';


export default function Perfil() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/form-registro');
    };

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
            <div>
                <button type="button" class="btn btn-success ms-4" onClick={handleButtonClick}>Quiero convertirme en cuidador</button>
            </div>
        </>
    );
}