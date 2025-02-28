import React from "react";
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <NavLink id="link" className="navbar-brand " to="/jobsssss" >
                  NEWS Updates
                </NavLink>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink exact  className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact  className="nav-link" to="/technology">
                        Technology
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact  className="nav-link" to="/jobs">
                        Jobs
                      </NavLink>
                    </li>
                  </ul>
                  {/* <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
