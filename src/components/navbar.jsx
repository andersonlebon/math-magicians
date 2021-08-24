import React from 'react';

const Navbar = () => (
  <header className="w-100">
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/home">
        Math magicians
      </a>
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
          <a className="nav-item nav-link active" href="/">
            Home
            <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="/calculator">
            Calculator
          </a>
          <a className="nav-item nav-link" href="/quotes">
            Quotes
          </a>
        </div>
      </div>
    </nav>
  </header>
);
export default Navbar;
