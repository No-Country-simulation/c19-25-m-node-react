import React, { useState } from 'react';
import UsuarioRegistrationForm from './UsuarioRegistrationForm'; 
import PaseadorRegistrationForm from './PaseadorRegistrationForm';


function RegistrationForm() {
  const [userType, setUserType] = useState(''); 

  
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div>
      <label>Tipo de usuario:</label>
      <select value={userType} onChange={handleUserTypeChange}>
        <option value="usuario">Usuario</option>
        <option value="paseador">Paseador</option>
      </select>

      {userType === 'usuario' && (
        <UsuarioRegistrationForm /> 
      )}

      {userType === 'paseador' && (
        <PaseadorRegistrationForm /> 
      )}
    </div>
  )};

  export default RegistrationForm;