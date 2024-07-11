import React, { useState } from 'react';

export default function BookingSearch() {
    const [city, setCity] = useState('');
    const [petType, setPetType] = useState('');
    const [priceFilter, setPriceFilter] = useState(''); 
    const [ratingFilter, setRatingFilter] = useState(''); 
    const [date, setDate] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const searchParams = {
            city,
            petType,
            priceFilter,
            ratingFilter,
            date
        };

        const queryParams = new URLSearchParams(searchParams).toString();
        const url = `/api/search?${queryParams}`;

        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al buscar datos');
            }
            return response.json();
        })
        .then(data => {
            setSearchResults(data); 
        })
        .catch(error => {
            console.error('Error de red:', error);
        });
    };

    return (
        <div>
            <input type="text" placeholder="Ciudad" value={city} onChange={(e) => setCity(e.target.value)} />
            <input type="text" placeholder="Tipo de Mascota" value={petType} onChange={(e) => setPetType(e.target.value)} />
            <input type="number" placeholder="Precio" value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} />
            <input type="number" placeholder="Valoración" value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>

            { }
            <ul>
                {searchResults.map(result => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
}
