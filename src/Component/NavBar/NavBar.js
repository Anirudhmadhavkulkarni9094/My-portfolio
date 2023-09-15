import React from 'react';
import '../Resources/StyleSheet/NavBar.css';
import Login from '../Forms/Login';

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-custome" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/My-Blog">
                My Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/My-Project">
                My Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About-me">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Feedback">
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admin-panel">
                Admin panel
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Login
              </button>
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {/* Your modal content goes here */}
                      <Login></Login>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
