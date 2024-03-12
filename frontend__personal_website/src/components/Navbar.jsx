import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b33702221d4b3baba40e16a_Asset%203.svg"
            width="50"
            alt=""
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link kklo" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link kklo" href="#cv">CV</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
