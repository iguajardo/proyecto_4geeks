import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { NavLink, withRouter, Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../img/logo-s.png'


const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { token, user_img } = store;


    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                <div className="container-fluid">
                    <img className="logo" src={logo} />
                    <Link className="navbar-brand" to="/">
                        Serenity
                    </Link>
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
                                <NavLink exact className="nav-link" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/ejercicio-respiracion">
                                    Ejercicio
                                </NavLink>
                            </li>

                        </ul>
                        {
                            token === null ? (
                                <div className="btn-group">
                                    <button type="button" className="btn btn-light">
                                        <NavLink className="btn_perfil nav-link" to="/login">
                                            Iniciar sesion
                                        </NavLink>
                                    </button>
                                    <button type="button" className="btn btn-light">
                                        <NavLink className="btn_perfil nav-link" to="/register">
                                            Registrarse
                                        </NavLink>
                                    </button>
                                </div>
                            ) : (
                                <div className="btn-group">
                                    <button type="button" className="btn btn-light">
                                        <NavLink className="btn_perfil nav-link d-flex" to="/perfil">
                                            <span className="mx-3">{store.nombre_usuario}</span>
                                            <div className="imagen rounded-circle" style={{ backgroundImage: `url(${user_img})`, width: "30px", height: "30px", backgroundPosition: "center", backgroundSize: "cover" }}>
                                            </div>
                                        </NavLink>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-light dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <button className="dropdown-item" onClick={actions.Logout}>
                                                Cerrar Sesión
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