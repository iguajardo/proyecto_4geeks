import React, { useState } from 'react'
import { EjercicioResp } from '../components/Ejercicioresp'
import { NavLink } from 'react-router-dom';


export const EjercicioRespiracion = () => {

    const [breathe, setBreathe] = useState(true)
    const [cycling, setCycling] = useState(true)

    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-12 col-lg-6  text-start textoejerc my-3">
                    <h2 className=" mb-4">Ejercicio de Relajación 4,7,8</h2>
                    <p>Estos son los tres pasos más importantes del ejercicio:</p>
                    <ul className="instrucciones">
                        <li>Cierra tu boca e inhala el aire a través de la nariz. Cuenta hasta cuatro</li>
                        <li>Aguanta la respiración durante siete segundos.</li>
                        <li>Exhala completamente el aire de tus pulmones durante ocho segundos.</li>
                    </ul>
                </div>
                <div className="col-md-12 col-lg-6 d-flex justify-content-center my-3 flex-column">
                    <div className="contenedorrespiracion">
                        <EjercicioResp breathe={breathe} setCycling={setCycling} />
                        {!cycling && (
                            <div className="replypopup">
                                <button className="btn btn-light text-primary col-md-2 m-2" onClick={() => { setBreathe(!breathe); setCycling(true) }} >
                                    <i className="fas fa-redo-alt p-0"></i>
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="row justify-content-center m-3">
                        <button className="btn btn-light col-md-2 m-2 ">
                            <NavLink className="btn_perfil nav-link" to="/grounding">
                                Siguiente ejercicio
                            </NavLink>
                        </button>
                        <button className="btn btn-light col-md-2 m-2">
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
