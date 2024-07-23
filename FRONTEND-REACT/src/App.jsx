import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Perfil from "./routes/Perfil.jsx";
import Buscador from "./routes/Buscador.jsx";
import Registrar from "./routes/Registrar.jsx";
import Anuncios from "./pages/Anuncios.jsx";
import Header from "./components/Header/Header.jsx";
import FormRegistro2 from "./components/FormRegistro2.jsx";
import Onboarding from "./pages/OnBoarding.jsx";
import AppContext from "./components/Providers/AppContext.jsx";
import "./App.css";
import TokenContext from "./components/Providers/TokenContext.jsx";
import TerminosYCondiciones from "./pages/TerminosYCondiciones.jsx";

function App() {
  // Cargar valores iniciales de Local Storage
  const initialDataUsuario =
    JSON.parse(localStorage.getItem("dataUsuario")) || [];
  const initialToken = JSON.parse(localStorage.getItem("token")) || false;

  const [dataUsuario, setDataUsuario] = useState(initialDataUsuario);
  const [token, setToken] = useState(initialToken);

  // Guardar los valores en Local Storage cuando cambian
  useEffect(() => {
    localStorage.setItem("dataUsuario", JSON.stringify(dataUsuario));
  }, [dataUsuario]);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  console.log(token);

  return (
    <>
      <div className="marginBottomHeader">
        <TokenContext.Provider value={{ token }}>
          <Header />
        </TokenContext.Provider>
      </div>
      <div>
        <AppContext.Provider
          value={{ dataUsuario, setDataUsuario, token, setToken }}
        >
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/buscador" element={<Buscador />} />
            <Route path="/anuncios" element={<Anuncios />} />
            <Route path="/terminosycondiciones" element={<TerminosYCondiciones />} />
            <Route path="/form-registro" element={<FormRegistro2 />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
