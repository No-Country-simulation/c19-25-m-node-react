import React, { useState } from "react";
import apiService from "./services/apiService";

function UserForm() {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = await apiService.registerUser(userData);
      console.log("Usuario registrado:", newUser);
      
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default UserForm;