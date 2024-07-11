function PaseadorRegistrationForm() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');
    const [precio, setPrecio] = useState('');
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
  
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  
        <label>Contraseña:</label>
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
  
        <label>Provincia:</label>
        <input type="text" value={provincia} onChange={(e) => setProvincia(e.target.value)} />
  
        </form>)};

        export default PaseadorRegistrationForm;