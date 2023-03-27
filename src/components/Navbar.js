import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";
export default function Navbar(props) {
  const { title, about } = props;
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item" style={{ marginRight: "15px" }}>
                <Link to="/">Home</Link>
              </div>
              <div className="nav-item">
                <Link to="/about">About</Link>
              </div>
            </div>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } `}
            >
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Enable Drak mode
              </label>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

{
  /* // Navbar.PropTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string
// }; */
}

Navbar.defaultProps = {
  title: "set title here",
  about: "set about here",
};
