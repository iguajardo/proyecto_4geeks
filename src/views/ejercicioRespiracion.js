import React from 'react'
import { EjercicioResp } from '../components/ejercicioresp'
import { NavLink, withRouter, Link } from 'react-router-dom';


export const ejercicioRespiracion = () => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-12 col-lg-6 textoejerc my-3">
                    <h1 className="text-center mb-4">Ejercicio de Relajación 4,7,8</h1>
                    <p>Estos son los tres pasos más importantes del ejercicio:</p>
                    <ul>
                        <li>Cierra tu boca e inhala el aire a través de la nariz. Cuenta hasta cuatro</li>
                        <li>Aguanta la respiración durante siete segundos.</li>
                        <li>Espira completamente el aire de tus pulmones durante ocho segundos.</li>
                    </ul>
                </div>
                <div className="col-md-12 col-lg-6 d-flex justify-content-center my-3 flex-column">
                    <EjercicioResp />
                    <div className="row justify-content-center m-3">
                        <button className="btn btn-primary col-md-2 ">
                            <i className="fas fa-redo-alt p-0"></i>
                        </button>
                        <button className="btn btn-light col-md-2 ">
                            <NavLink className="btn_perfil nav-link" to="/grounding">
                                Siguiente ejercicio
                            </NavLink>
                        </button>
                        <button className="btn btn-light col-md-2">
                            <NavLink className="btn_perfil nav-link" to="/">
                                Me siento mejor!
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
