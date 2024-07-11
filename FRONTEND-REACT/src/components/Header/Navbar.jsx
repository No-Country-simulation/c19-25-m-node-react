import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-dark bg-warning navbar-expand-lg py-1" id="navbarPrincipal" data-bs-theme="dark">
        <div className="container-fluid d-flex justify-content-between">
          <button
            className="navbar-toggler text-body-white"
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
          <div className="collapse navbar-collapse ms-2">
            <span className="fs-3"><strong>Yo lo cuido</strong></span>
          </div>
          <div className="collapse navbar-collapse text-lg-center ms-2 mt-2 p-0 row" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-end">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/anuncios" ? "active" : ""}`}
                  to="/anuncios"
                >
                  Anuncios
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/perfil" ? "active" : ""}`}
                  to="/perfil"
                >
                  Perfil
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/buscador" ? "active" : ""}`}
                  to="/buscador"
                >
                  Buscador
                </Link>
              </li>
              <li className="nav-item bg-white rounded-pill w-25">
                <Link
                  className="nav-link"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item bg-primary rounded-pill w-25 ms-2">
                <Link
                  className="nav-link"
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
