import React from 'react';

const Navbar = () => (
  <header className="w-100">
    <nav className="navbar navbar-expand-lg navbar-dark w-100 bg-dark">
      <h1 className="navbar-brand font" href="/home">
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
          <a className="nav-item nav-link active font" href="/">
            Home
            <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link font" href="/calculator">
            Calculator
          </a>
          <a className="nav-item nav-link font" href="/quotes">
            Quotes
          </a>
        </div>
      </div>
    </nav>
  </header>
);
export default Navbar;
