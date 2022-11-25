import React from "react";
//esto es importar una dependencia de React para que se reconozcan los PropTypes
import PropTypes from "prop-types";


//create your first component
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <p className="navbar-brand" href="#">Start Bootstrap</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">Services</a>
                <a className="nav-link disabled">Contact</a>
                </div>
            </div>
            </div>
        </nav>
    )

}

export default Navbar;