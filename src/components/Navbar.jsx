import React from "react";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
      <div className="container-fluid">
      {/* Logo / Title */}
      <a className="navbar-brand fw-bold" href="#">
        React Product App
      </a>

      {/* Toggle for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Content */}
      <div className="collapse navbar-collapse" id="navbarContent">

        <div className="ms-auto search-box">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>
      </div>
    </nav>


  );
}

export default Navbar;