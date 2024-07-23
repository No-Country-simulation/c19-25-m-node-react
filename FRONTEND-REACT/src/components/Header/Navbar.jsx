import React from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import TokenContext from "../Providers/TokenContext";

export default function Navbar() {
  const context = useContext(TokenContext);

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg py-1" id="navbarPrincipal">
      <div className="container-fluid d-flex justify-content-between">
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="togglerButtonNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="fs-3 ms-2">
          <strong>Yo lo cuido</strong>
        </span>
        <div
          className="collapse navbar-collapse text-lg-center ms-2 p-0 row"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item mx-2">
              <Link
                className={`nav-link py-3 ${
                  location.pathname === "/home" ? "active" : ""
                }`}
                aria-current="page"
                to="/home"
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
                  >
                    Login
                  </Link>
                  <Link
                    className={`nav-link py-3 ${
                      location.pathname === "/login" ? "active" : ""
                    } d-lg-none`}
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item ms-2 mx-2">
                  <Link
                    className={`nav-link py-2 my-2 ${
                      location.pathname === "/registrar" ? "active" : ""
                    } bg-primary rounded-pill d-lg-block d-none px-5`}
                    to="/registrar"
                  >
                    Registro
                  </Link>
                  <Link
                    className={`nav-link py-3 ${
                      location.pathname === "/registrar" ? "active" : ""
                    } d-lg-none`}
                    to="/registrar"
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
