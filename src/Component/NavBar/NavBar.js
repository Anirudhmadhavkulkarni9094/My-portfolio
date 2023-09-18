import React from 'react';
import '../Resources/StyleSheet/NavBar.css';
import Login from '../Forms/Login';

import { Link } from 'react-router-dom';

function NavBar({ authorize, auth }) {
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
              {auth && (
                <Link className="nav-link" to="/Admin-panel">
                  Admin panel
                </Link>
              )}
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
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      {/* Your modal content goes here */}
                      <Login authorize={authorize} />
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
