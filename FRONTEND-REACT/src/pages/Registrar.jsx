import React, { useState, useRef } from 'react';
import RegistrationForm from '../components/RegistrationForm'; 

export default function Registrar() {
    const [formData, setFormData] = useState({
        fullName: "",
        birthDate: "",
        email: "",
        password: "",
        address: "",
        province: "",
        municipality: "",
        phone: "",
        userType: "" // Aca va que tipo de usuario es
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
            
        }
    };

    return (
        <div>
            <RegistrationForm formData={formData} setFormData={setFormData} /> {}
        </div>
    );
}