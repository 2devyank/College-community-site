import React from "react";
import Profile from "./Profile";
const Topbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="http://adgitmdelhi.ac.in/wp-content/uploads/2018/07/logo-adgitm-small2.jpg"
              width={65}
              height={54}
              alt='LOGO'
              style={{ borderRadius: "50%", border: "solid white 3px" }}
            />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/general">
                  General
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/technology">
                  Technology
                </a>
              </li>
            </ul>
            <form className="d-flex" style={{marginRight:'100px'}}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{width:'600px'}}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <Profile/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
