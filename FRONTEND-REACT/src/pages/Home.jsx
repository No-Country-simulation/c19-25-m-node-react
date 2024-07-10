import React, { useState, useEffect } from 'react';
import CardHome from '../components/CardHome.jsx'




export default function Home() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Aquí deberías hacer una llamada a la API para obtener las reservas
    // A continuación, un ejemplo de datos simulados:
    const fetchedReservations = [
      {
        id: 1,
        profileImage: 'https://via.placeholder.com/150',
        name: 'John Doe',
        date: '2024-07-15',
      },
      {
        id: 2,
        profileImage: 'https://via.placeholder.com/150',
        name: 'Jane Smith',
        date: '2024-08-01',
      },
    ];
    setReservations(fetchedReservations);
  }, []);

  const today = new Date().toISOString().split('T')[0];


  return (
    <>
      <div className="text-start w-auto mx-5 p-0">
        <div className="">
          <h1>Bienvenido <strong>USUARIO</strong> a tu página principal:</h1>
        </div>

        <div className="btn-group btn-gruop-lg w-50 mt-5" role="group">
          <button type="button" className="btn btn-outline-secondary"> Próximas reservas</button>
          <button type="button" className="btn btn-outline-secondary"> Ver más</button>
        </div>

        <div className="container mt-5">
          <h2>Próximas reservas</h2>
          <div className="row mt-5">
            {reservations.filter(reservation => reservation.date > today).map((reservation) => (
              <CardHome
                key={reservation.id}
                profileImage={reservation.profileImage}
                name={reservation.name}
                date={reservation.date}
              />
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
