import React, { useState, useEffect } from 'react';
import CardHome from '../components/CardHome.jsx'




export default function Home() {
  const [reservations, setReservations] = useState([]);
  const [showReservations, setShowReservations] = useState(true);


  useEffect(() => {
    const fetchPaseadores = async () => {
      try {
        const response = await fetch('URL_DE_TU_API_PARA_OBTENER_PASEADORES');
        if (response.ok) {
          const data = await response.json();
          setReservations(data); // Actualiza el estado con los paseadores obtenidos
        } else {
          console.error('Error al obtener los paseadores');
        }
      } catch (error) {
        console.error('Error al obtener los paseadores:', error);
      }
    };
  
    fetchPaseadores();
  }, []);

  const today = new Date().toISOString().split('T')[0];

  const toggleReservations = () => {
    setShowReservations(prevState => !prevState);
  };


  return (
    <>
      <div className="text-start w-auto mx-3 p-0 mt-5">
        <div className="">
          <h1>Bienvenido <strong>USUARIO</strong> a tu página principal:</h1>
        </div>

        <div className="btn-group btn-gruop-lg mt-5 mx-auto mx-sm-5 col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3" role="group">
          <button type="button" className={`btn ${showReservations ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={toggleReservations}> Próximas reservas</button>
          <button type="button" className="btn btn-outline-secondary"> Ver más</button>
        </div>
        
        {showReservations && (
          <div className="container mt-4">
            <h2>Próximas reservas:</h2>
            <div className="row mt-3">
              {reservations.filter(reservation => reservation.date > today).map((reservation) => (
                <CardHome
                  key={reservation.id}
                  profileImage={reservation.profileImage}
                  name={reservation.name}
                  date={reservation.date}
                  rolUsuario={reservation.rolUsuario}
                />
              ))}
            </div>
          </div>
        )}
      </div>

    </>
  );
}
