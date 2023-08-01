import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    const {handleClick, mode, text} = this.props
    return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">NewsToday</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='business'>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='entertainment'>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='health'>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='science'>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='sports'>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='technology'>Technology</Link>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${mode==='dark'?'white':'dark'}`}>
            <input onClick={handleClick} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">{text}</label>
          </div>
        </div>
    </nav>
    )
  }
}

export default Navbar
