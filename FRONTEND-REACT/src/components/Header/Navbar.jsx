import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TokenContext } from "../Providers/TokenContext";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa Bootstrap JS si no está ya importado en tu proyecto

export default function Navbar() {
  const context = useContext(TokenContext);
  const location = useLocation();
  const navbarCollapseRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate()

  const handleLinkClick = () => {
    if (navbarCollapseRef.current && window.innerWidth < 992) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapseRef.current, {
        toggle: false,
      });
      bsCollapse.hide();
      setIsCollapsed(true);
    }
  };

  const toggleNavbar = () => {
    if (navbarCollapseRef.current) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapseRef.current, {
        toggle: false,
      });
      if (isCollapsed) {
        bsCollapse.show();
      } else {
        bsCollapse.hide();
      }
      setIsCollapsed(!isCollapsed);
    }
  };

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg py-1" id="navbarPrincipal">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          id="togglerButtonNavbar"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="m-0 p-0 d-flex align-items-center" onClick={navigateToHome}>
          {location.pathname !== "/" && 
          <img
            src="https://i.imgur.com/tOcMxTW.png"
            alt="logo Yo lo cuido"
            className="my-2 me-3 p-0 imgNavbar cursor-pointer"
          />}
          <span className="fs-4 ms-2 cursor-pointer">
            <strong>Yo lo cuido</strong>
          </span>
        </div>

        <div
          className="collapse navbar-collapse text-lg-center ms-2 p-0 row"
          id="navbarNav"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item mx-2 mt-3 mt-lg-0">
              <Link
                className={`nav-link py-3 ${
                  location.pathname === "/home" ? "active" : ""
                }`}
                aria-current="page"
                to="/home"
                onClick={handleLinkClick}
              >
                <i className="fa-solid fa-house"></i>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link py-3 ${
                  location.pathname === "/anuncios" ? "active" : ""
                }`}
                to="/anuncios"
                onClick={handleLinkClick}
              >
                Crear Anuncio
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link py-3 ${
                  location.pathname === "/buscador" ? "active" : ""
                }`}
                to="/buscador"
                onClick={handleLinkClick}
              >
                Buscador
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link py-3 ${
                  location.pathname === "/terminosycondiciones" ? "active" : ""
                }`}
                to="/terminosycondiciones"
                onClick={handleLinkClick}
              >
                Terminos Y Condiciones
              </Link>
            </li>
            {context.token && (
              <li className="nav-item mx-2">
                <Link
                  className={`nav-link py-3 ${
                    location.pathname === "/perfil" ? "active" : ""
                  }`}
                  to="/perfil"
                  onClick={handleLinkClick}
                >
                  Perfil
                </Link>
              </li>
            )}
            {!context.token && (
              <>
                <li className="nav-item mx-2">
                  <Link
                    className={`nav-link py-2 my-2 ${
                      location.pathname === "/login" ? "active" : ""
                    } bg-white rounded-pill d-lg-block d-none px-5`}
                    to="/login"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                  <Link
                    className={`nav-link py-3 ${
                      location.pathname === "/login" ? "active" : ""
                    } d-lg-none`}
                    to="/login"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item ms-2 mx-2">
                  <Link
                    className={`nav-link py-2 my-2 bg-azul rounded-pill d-lg-block d-none px-5`}
                    to="/registrar"
                    onClick={handleLinkClick}
                  >
                    Registro
                  </Link>
                  <Link
                    className={`nav-link py-3 ${
                      location.pathname === "/registrar" ? "active" : ""
                    } d-lg-none`}
                    to="/registrar"
                    onClick={handleLinkClick}
                  >
                    Registro
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
