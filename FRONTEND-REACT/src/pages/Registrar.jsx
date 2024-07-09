import React, { useState, useRef } from 'react';

export default function Registrar() {
    const [formData, setFormData] = useState({
        fullName: "",
        birthDate: "",
        email: "",
        password: "",
        address: "",
        province: "",
        municipality: "",
        phone: ""
    });

    const formRegister = useRef(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));

        if (id === "province") {
            setFormData((prevData) => ({ ...prevData, municipality: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRegister.current;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        form.classList.add('was-validated');

        if (form.checkValidity() === true) {
            console.log(formData);
            // Aquí puedes añadir la lógica para enviar el formulario
        }
    };

    const provinces = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"];
    const municipalities = {
        "Buenos Aires": ["La Plata", "Mar del Plata", "Bahía Blanca", "Tandil", "Olavarría", "Quilmes", "Avellaneda", "Lanús", "Lomas de Zamora", "Morón", "San Isidro", "Tigre", "Vicente López"],
        "Catamarca": ["San Fernando del Valle de Catamarca", "Valle Viejo", "Belén", "Tinogasta", "Santa María"],
        "Chaco": ["Resistencia", "Sáenz Peña", "Villa Ángela", "Charata", "Las Breñas"],
        "Chubut": ["Rawson", "Comodoro Rivadavia", "Trelew", "Puerto Madryn", "Esquel"],
        "Córdoba": ["Córdoba", "Villa Carlos Paz", "Río Cuarto", "Villa María", "San Francisco"],
        "Corrientes": ["Corrientes", "Goya", "Paso de los Libres", "Curuzú Cuatiá", "Mercedes"],
        "Entre Ríos": ["Paraná", "Concordia", "Gualeguaychú", "Concepción del Uruguay", "Villaguay"],
        "Formosa": ["Formosa", "Clorinda", "Pirané", "El Colorado", "Ingeniero Juárez"],
        "Jujuy": ["San Salvador de Jujuy", "Palpalá", "San Pedro", "Perico", "El Carmen"],
        "La Pampa": ["Santa Rosa", "General Pico", "Toay", "Acha", "Realicó"],
        "La Rioja": ["La Rioja", "Chilecito", "Aimogasta", "Chamical", "Chepes"],
        "Mendoza": ["Mendoza", "San Rafael", "Godoy Cruz", "Luján de Cuyo", "Maipú"],
        "Misiones": ["Posadas", "Oberá", "Eldorado", "Puerto Iguazú", "San Vicente"],
        "Neuquén": ["Neuquén", "Plottier", "Centenario", "Zapala", "San Martín de los Andes"],
        "Río Negro": ["Viedma", "San Carlos de Bariloche", "General Roca", "Cipolletti", "Villa Regina"],
        "Salta": ["Salta", "San Ramón de la Nueva Orán", "Tartagal", "Cafayate", "General Güemes"],
        "San Juan": ["San Juan", "Rivadavia", "Chimbas", "Rawson", "Pocito"],
        "San Luis": ["San Luis", "Villa Mercedes", "Merlo", "La Punta", "Justo Daract"],
        "Santa Cruz": ["Río Gallegos", "Caleta Olivia", "El Calafate", "Pico Truncado", "Puerto Deseado"],
        "Santa Fe": ["Santa Fe", "Rosario", "Rafaela", "Venado Tuerto", "Reconquista"],
        "Santiago del Estero": ["Santiago del Estero", "La Banda", "Termas de Río Hondo", "Añatuya", "Quimilí"],
        "Tierra del Fuego": ["Ushuaia", "Río Grande", "Tolhuin"],
        "Tucumán": ["San Miguel de Tucumán", "Yerba Buena", "Tafí Viejo", "Concepción", "Monteros"]
    };

    return (
        <form ref={formRegister} onSubmit={handleSubmit} className="container-fluid p-0 mb-3 needs-validation mt-5 border rounded px-2" noValidate>
            <div className="container-fluid py-3 px-2">
                <div className="row g-4">
                    <div className="col-12">
                        <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                        <input
                            type="text"
                            id="fullName"
                            className="form-control"
                            placeholder='Gerónimo Pita Valcony'
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <div className="valid-feedback">¡Se ve bien!</div>
                        <div className="invalid-feedback">Por favor, ingrese su nombre completo.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="birthDate" className="form-label">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            id="birthDate"
                            className="form-control"
                            value={formData.birthDate}
                            onChange={handleChange}
                            required
                        />
                        <div className="valid-feedback">¡Se ve bien!</div>
                        <div className="invalid-feedback">Por favor, ingrese su fecha de nacimiento.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder='ejemplo@ejemplo.com'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <div className="valid-feedback">¡Se ve bien!</div>
                        <div className="invalid-feedback">Por favor, ingrese su correo electrónico.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder='Escriba una contraseña con más de 8 caracteres'
                            value={formData.password}
                            onChange={handleChange}
                            minLength="8"
                            required
                        />
                        <div className="valid-feedback">¡Se ve bien!</div>
                        <div className="invalid-feedback">Por favor, ingrese una contraseña de al menos 8 caracteres.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="address" className="form-label">Dirección</label>
                        <input
                            type="text"
                            id="address"
                            className="form-control"
                            placeholder="Avenida Plutarco, 12"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                        <div className="valid-feedback">¡Se ve bien!</div>
                        <div className="invalid-feedback">Por favor, ingrese su dirección.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="province" className="form-label">Provincia</label>
                        <select
                            id="province"
                            className="form-select"
                            value={formData.province}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione una provincia</option>
                            {provinces.map((province) => (
                                <option key={province} value={province}>{province}</option>
                            ))}
                        </select>
                        <div className="valid-feedback">¡Se ve bien!</div>
                        <div className="invalid-feedback">Por favor, seleccione una provincia.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="municipality" className="form-label">Municipio</label>
                        <select
                            id="municipality"
                            className="form-select"
                            value={formData.municipality}
                            onChange={handleChange}
                            required
                            disabled={!formData.province}
                        >
                            <option value="">Seleccione un municipio</option>
                            {formData.province && municipalities[formData.province].map((municipio) => (
                                <option key={municipio} value={municipio}>{municipio}</option>
                            ))}
                        </select>
                        <div className="valid-feedback">¡Se ve bien!</div>
                        <div className="invalid-feedback">Por favor, seleccione un municipio.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="phone" className="form-label">Número de Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            className="form-control"
                            placeholder="+54 9 XX XXXX-XXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <div className="valid-feedback">¡Se ve bien!</div>
                        <div className="invalid-feedback">Por favor, ingrese su número de teléfono.</div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-body-secondary py-3 px-2">
                <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                    <button className="btn btn-success p-2" type="submit">Registrarme</button>
                </div>
            </div>
        </form>
    );
}
