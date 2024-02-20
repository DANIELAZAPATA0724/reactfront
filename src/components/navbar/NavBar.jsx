import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para buscar blogs con searchQuery
    console.log("Realizar búsqueda con:", searchQuery);
    // Puedes enviar la cadena de búsqueda al backend aquí
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt="Logo"
            style={{ maxWidth: "150px", maxHeight: "50px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/AboutUs">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Metodología
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/show">
                Show Post
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/LoginForm">
                <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.9rem" }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
