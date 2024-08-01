import React from "react";
import BookingSearch from "../components/BookingSearch";
import CardAnuncio from "../components/CardAnuncio"; // Asegúrate de que la ruta de importación sea correcta

const anunciosMock = [
  {
    id: 1,
    titulo: "Cuidador experimentado",
    imgperfil: "https://images.unsplash.com/photo-1525983360072-2ebda055ba40?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nombre: "Vanesa",
    apellido: "Pérez",
    distanciaMaxima: 10,
    direccion: "Calle Principal 123",
    localidad: "Buenos Aires",
    selectedPets: "Perros, Gatos",
    serviceOptions: "Voy a su domicilio y Paseos",
    selectedRols: "Cuidador",
    precio: 15,
    fechaInicio: "2024-08-15T10:00:00",
    fechaFin: "2024-08-20T18:00:00",
    descripcion: "Cuidador con experiencia en perros y gatos. Disponible para paseos y visitas a domicilio.",
    ultimaActualizacion: "Hace 2 días"
  },
  {
    id: 2,
    titulo: "Paseador de perros",
    imgperfil: "https://images.unsplash.com/photo-1548858806-e064cf9872c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nombre: "María",
    apellido: "González",
    distanciaMaxima: 5,
    direccion: "Avenida Central 456",
    localidad: "Buenos Aires",
    selectedPets: "Perros",
    serviceOptions: "Paseos",
    selectedRols: "Paseador",
    precio: 12,
    fechaInicio: "2024-08-10T09:00:00",
    fechaFin: "2024-08-25T17:00:00",
    descripcion: "Especializada en paseos de perros. Energética y responsable.",
    ultimaActualizacion: "Ayer"
  },
  {
    id: 3,
    titulo: "Cuidado de mascotas en casa",
    imgperfil: "https://images.unsplash.com/photo-1493101561740-e745892775b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nombre: "Carla",
    apellido: "Ruiz",
    distanciaMaxima: 0,
    direccion: "Plaza Mayor 789",
    localidad: "Buenos Aires",
    selectedPets: "Perros, Gatos, Aves",
    serviceOptions: "Solo en mi domicilio",
    selectedRols: "Cuidador",
    precio: 20,
    fechaInicio: "2024-08-01T08:00:00",
    fechaFin: "2024-08-31T20:00:00",
    descripcion: "Ofrezco cuidado de mascotas en mi hogar. Ambiente seguro y cómodo para todo tipo de animales.",
    ultimaActualizacion: "Hace 3 días"
  },
  {
    id: 4,
    titulo: "Entrenador canino",
    imgperfil: "https://images.unsplash.com/photo-1495953852792-8b6722cbd195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nombre: "Marcos",
    apellido: "Martínez",
    distanciaMaxima: 15,
    direccion: "Calle del Parque 321",
    localidad: "Buenos Aires",
    selectedPets: "Perros",
    serviceOptions: "Voy a su domicilio y Entrenamiento",
    selectedRols: "Entrenador",
    precio: 25,
    fechaInicio: "2024-08-05T11:00:00",
    fechaFin: "2024-08-30T19:00:00",
    descripcion: "Entrenadora profesional con métodos positivos. Especializada en problemas de conducta.",
    ultimaActualizacion: "Hace 1 semana"
  },
  {
    id: 5,
    titulo: "Cuidador de gatos",
    imgperfil: "https://plus.unsplash.com/premium_photo-1664475512301-8eb630d74412?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nombre: "Juana",
    apellido: "Sánchez",
    distanciaMaxima: 8,
    direccion: "Avenida de los Gatos 654",
    localidad: "Buenos Aires",
    selectedPets: "Gatos",
    serviceOptions: "Voy a su domicilio",
    selectedRols: "Cuidador",
    precio: 18,
    fechaInicio: "2024-08-12T14:00:00",
    fechaFin: "2024-08-22T12:00:00",
    descripcion: "Especialista en cuidado de gatos. Experiencia con gatos de todas las edades y temperamentos.",
    ultimaActualizacion: "Hace 5 días"
  },
  {
    id: 6,
    titulo: "Cuidadora de mascotas exóticas",
    imgperfil: "https://plus.unsplash.com/premium_photo-1663089918704-44e3f495ff76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nombre: "Elena",
    apellido: "Torres",
    distanciaMaxima: 20,
    direccion: "Calle Exótica 987",
    localidad: "Buenos Aires",
    selectedPets: "Perros, Aves exóticas, Roedores",
    serviceOptions: "Voy a su domicilio y Solo en mi domicilio",
    selectedRols: "Cuidador y Especialista en exóticos",
    precio: 30,
    fechaInicio: "2024-08-18T09:00:00",
    fechaFin: "2024-09-05T18:00:00",
    descripcion: "Amplia experiencia en el cuidado de mascotas exóticas. Ofrezco servicios especializados para reptiles, aves exóticas y pequeños mamíferos.",
    ultimaActualizacion: "Hace 2 semanas"
  }
];

export default function Buscador() {
  return (
    <div>
      <BookingSearch />
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-lg-3 g-4">
          {anunciosMock.map((anuncio) => (
            <CardAnuncio key={anuncio.id} anuncio={anuncio} />
          ))}
        </div>
      </div>
    </div>
  );
}