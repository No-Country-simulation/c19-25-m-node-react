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

    const formRef = useRef(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));

        if (id === "province") {
            setFormData((prevData) => ({ ...prevData, municipality: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;

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

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="container-fluid p-0 mb-3 needs-validation mt-5" noValidate>
            <div className="container-fluid py-3 px-2">
                <div className="row g-4">
                    <div className="col-12">
                        <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                        <input 
                            type="text" 
                            id="fullName" 
                            className="form-control" 
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
                    <button className="btn btn-secondary" type="button">Cancelar</button>
                    <button className="btn btn-primary" type="submit">Registrar</button>
                </div>
            </div>
        </form>
    );
}
