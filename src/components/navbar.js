import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { NavLink, withRouter, Link } from 'react-router-dom';
import '../styles/navbar.css';


const Navbar = () => {
    const { store, actions, setStore } = useContext(Context);
    const {token} = store;
    

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Serenity
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/ejercicio-respiracion">
                                    Ejercicio
                                </NavLink>
                            </li>
                        </ul>
                        {
                            token == null ?(
                            <div className="btn-group">
                            <button type="button" className="btn btn-light">
                                <NavLink className="btn_perfil nav-link" to="/">
                                    <i className="far fa-user-circle fs-4"></i>
                                </NavLink>
                            </button>
                            <button
                                type="button"
                                className="btn btn-light dropdown-toggle   dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="dropdown-item" to="/register">
                                        Registrarse
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/login">
                                        Iniciar Sesion
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        ):(
                            <div className="btn-group">
                            <button type="button" className="btn btn-light">
                                <NavLink className="btn_perfil nav-link" to="/perfil">
                                    <i className="far fa-user-circle fs-4"></i>
                                </NavLink>
                            </button>
                            <button
                                type="button"
                                className="btn btn-light dropdown-toggle   dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <button className="dropdown-item"  onClick={actions.Logout}>
                                        Cerrar Sesion
                                    </button>
                                </li>
                                
                            </ul>
                        </div>
                        )
                        
                        }
                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default withRouter(Navbar);