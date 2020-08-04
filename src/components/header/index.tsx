import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss';

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain"
                                    aria-controls="navbarMain" aria-expanded="true" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <NavLink to="/"><img src="/assets/logo.png" alt="Logo" /></NavLink>

                                <div className="collapse navbar-collapse" id="navbarMain">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <NavLink exact to="/" className="nav-link" activeClassName="active">Accueil</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact to="/news" className="nav-link" activeClassName="active">Nouveautés</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact to="/encyclopedia" className="nav-link" activeClassName="active">Encyclopédie</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact to="/store" className="nav-link" activeClassName="active">Boutique</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact to="/contact" className="nav-link" activeClassName="active">Nous contacter</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};