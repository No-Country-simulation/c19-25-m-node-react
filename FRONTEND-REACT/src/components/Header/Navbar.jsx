import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar mt-0 navbar-expand-lg d-flex justify-content-between py-1" id="navbarPrincipal">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
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
          <div className="collapse navbar-collapse text-start text-lg-center ms-2 mt-2 p-0 text-white row" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item col">
                <Link
                  className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="nav-item col">
                <Link
                  className={`nav-link ${location.pathname === "/anuncios" ? "active" : ""}`}
                  to="/anuncios"
                >
                  Anuncios
                </Link>
              </li>
              <li className="nav-item col">
                <Link
                  className={`nav-link ${location.pathname === "/perfil" ? "active" : ""}`}
                  to="/perfil"
                >
                  Perfil
                </Link>
              </li>
              <li className="nav-item col">
                <Link
                  className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item col">
                <Link
                  className={`nav-link ${location.pathname === "/buscador" ? "active" : ""}`}
                  to="/buscador"
                >
                  Buscador
                </Link>
              </li>
              <li className="nav-item col">
                <Link
                  className={`nav-link ${location.pathname === "/registrar" ? "active" : ""}`}
                  to="/registrar"
                >
                  Registro
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
