import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {
    return (
        <div>
            
            <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/About'>{props.aboutText}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeTheme} />
                            <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Theme</label>
                        </div>

                    </div>
                </div>
            </nav>
            
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Textutils',
    aboutText: 'About Us'
}