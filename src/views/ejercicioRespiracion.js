import React, { useState } from 'react'
import { EjercicioResp } from '../components/Ejercicioresp'
import { NavLink } from 'react-router-dom';
import resp from '../img/resp.svg'


export const EjercicioRespiracion = () => {

    const [breathe, setBreathe] = useState(true)
    const [cycling, setCycling] = useState(true)

    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-12 col-lg-6  textoejerc my-4">
                    <h2 className=" mb-4">Ejercicio de Relajación 4,7,8</h2>
                    <p>Estos son los tres pasos más importantes del ejercicio:</p>
                    <ul className="instrucciones">
                        <li>Cierra tu boca e inhala el aire a través de la nariz. Cuenta hasta cuatro</li>
                        <li>Aguanta la respiración durante siete segundos.</li>
                        <li>Exhala completamente el aire de tus pulmones durante ocho segundos.</li>
                    </ul>
                    <div className="img_fondo">
                    <img src={resp} className="d-flex " alt="" style={{width:"250px", }} />
                    </div>
                </div>
                <div className="ejercicio_der col-md-12 col-lg-6 d-flex my-4 flex-column">
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
                    <div className="row justify-content-center flex-nowrap m-3">
                        <button className="btn btn_next btn-9 custom-btn  m-2 ">
                            <NavLink className="boton_next nav-link text-light" to="/grounding">
                                Siguiente ejercicio
                            </NavLink>
                        </button>
                        <button className="btn btn_end btn-9 custom-btn  m-2">
                            <NavLink className=" boton_end nav-link text-light" to="/">
                                Salir
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
