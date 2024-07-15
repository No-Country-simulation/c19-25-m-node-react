import React, { useState, useEffect } from "react";
import CardHome from "./CardHome";

export default function MostrarProximasReservas() {
    const [reservations, setReservations] = useState([]);
    const [showReservations, setShowReservations] = useState(true);

    useEffect(() => {
        // Aquí deberíamos hacer una llamada a la base de datos para obtener las reservas

        // A continuación, un ejemplo de datos simulados:
        const fetchedReservations = [
            {
                id: 1,
                profileImage: 'https://via.placeholder.com/150',
                name: 'Perico de los Palotes',
                date: '2024-07-15',
                rolUsuario: 'Paseador',
            },
            {
                id: 2,
                profileImage: 'https://via.placeholder.com/150',
                name: 'Gerónimo Stilton',
                date: '2024-08-01',
                rolUsuario: 'Cuidador a tiempo completo',
            },
        ];
        setReservations(fetchedReservations);
    }, []);

    const today = new Date().toISOString().split('T')[0];

    const toggleReservations = () => {
        setShowReservations(prevState => !prevState);
    };

    return (
        <>
            <div>
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
    )

}