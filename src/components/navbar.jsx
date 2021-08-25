import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="w-100">
    <nav className="navbar navbar-expand-lg navbar-dark w-100 bg-dark">
      <h1 className="navbar-brand font">
        Math magicians
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link active font" to="/">
            Home
            <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link font" to="/calculator">
            Calculator
          </Link>
          <Link className="nav-item nav-link font" to="/quotes">
            Quotes
          </Link>
        </div>
      </div>
    </nav>
  </header>
);
export default Navbar;
