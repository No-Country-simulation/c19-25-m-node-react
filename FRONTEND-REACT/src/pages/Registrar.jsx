import React, { useState } from "react";

const provinces = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"];

const municipalities = {
    "Buenos Aires": ["La Plata", "Mar del Plata", "Bahía Blanca"],
    "Catamarca": ["San Fernando del Valle de Catamarca"],
    "Chaco": ["Resistencia"],
    "Chubut": ["Rawson", "Trelew"],
    "Córdoba": ["Córdoba", "Villa Carlos Paz"],
    "Corrientes": ["Corrientes"],
    "Entre Ríos": ["Paraná"],
    "Formosa": ["Formosa"],
    "Jujuy": ["San Salvador de Jujuy"],
    "La Pampa": ["Santa Rosa"],
    "La Rioja": ["La Rioja"],
    "Mendoza": ["Mendoza"],
    "Misiones": ["Posadas"],
    "Neuquén": ["Neuquén"],
    "Río Negro": ["Viedma"],
    "Salta": ["Salta"],
    "San Juan": ["San Juan"],
    "San Luis": ["San Luis"],
    "Santa Cruz": ["Río Gallegos"],
    "Santa Fe": ["Santa Fe", "Rosario"],
    "Santiago del Estero": ["Santiago del Estero"],
    "Tierra del Fuego": ["Ushuaia"],
    "Tucumán": ["San Miguel de Tucumán"]
};

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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));

        if (id === "province") {
            setFormData((prevData) => ({ ...prevData, municipality: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hay que ver a dónde enviamos el formulario, de momento lo dejo en Console.log!!
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="container-fluid p-0 mb-3 needs-validation mt-5" id="form1" noValidate>
            <div id="main" className="container-fluid py-3 px-2">
                <div className="row g-4">
                    <div className="col-12">
                        <label htmlFor="fullName" className="form-label">Nombre completo</label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Gerónimo Fallas Pilato"
                            className="form-control"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please insert your full name.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="birthDate" className="form-label">Fecha de nacimiento</label>
                        <input
                            type="date"
                            id="birthDate"
                            className="form-control"
                            required
                            value={formData.birthDate}
                            onChange={handleChange}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please insert your birth date.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="ejemplo@ejemplo.com"
                            className="form-control"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please insert your email.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Escriba una contraseña de más de 8 caracteres"
                            className="form-control"
                            required
                            minLength="8"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please insert your password (min 8 characters).</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="address" className="form-label">Dirección</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Avenida Platón, 18"
                            className="form-control"
                            required
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please insert your address.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="province" className="form-label">Provincia</label>
                        <select
                            id="province"
                            className="form-select"
                            required
                            value={formData.province}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona una provincia</option>
                            {provinces.map(province => (
                                <option key={province} value={province}>{province}</option>
                            ))}
                        </select>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please select a province.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="municipality" className="form-label">Municipio</label>
                        <select
                            id="municipality"
                            className="form-select"
                            required
                            value={formData.municipality}
                            onChange={handleChange}
                            disabled={!formData.province}
                        >
                            <option value="">Selecciona un municipio</option>
                            {formData.province && municipalities[formData.province].map(municipality => (
                                <option key={municipality} value={municipality}>{municipality}</option>
                            ))}
                        </select>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please select a municipality.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="phone" className="form-label">Número de teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="+54 9 XX XXXX-XXXX"
                            className="form-control"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please insert your phone number.</div>
                    </div>
                </div>
            </div>

            <div id="footer" className="container-fluid bg-body-secondary py-3 px-2">
                <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                    <button className="btn btn-success p-2" type="submit">Enviar</button>
                </div>
            </div>
        </form>
    );
}
