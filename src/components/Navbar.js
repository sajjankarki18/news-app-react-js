import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar(props) {
  let location = useLocation()
  useEffect(() => {
    console.log(location.pathname)
  }, [location])
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">NewsToday</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "#"? "active": ""}`} aria-current="page" to="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/"? "active": ""}`} aria-current="page" to='/'>General</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/business"? "active": ""}`} aria-current="page" to='business'>Business</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/entertainment"? "active": ""}`} aria-current="page" to='entertainment'>Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/health"? "active": ""}`} aria-current="page" to='health'>Health</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/science"? "active": ""}`} aria-current="page" to='science'>Science</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/sports"? "active": ""}`} aria-current="page" to='sports'>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/technology"? "active": ""}`} aria-current="page" to='technology'>Technology</Link>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
          <input onClick={props.handleClick} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
        </div>
      </div>
    </nav>
  );
}
