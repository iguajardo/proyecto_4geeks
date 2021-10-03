import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavPerfil = () => {
    return (
        <nav>
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                    <NavLink exact to="/perfil" className="nav-link" aria-current="page">Notas</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/perfil/calendario" className="nav-link">Calendario</NavLink>
                </li>
            </ul>
        </nav>
    )
}
