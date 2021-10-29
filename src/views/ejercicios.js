import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/ejercicios.css'



export const Ejercicios = () => {

    return (
        
        <div className="container-fluid grupo_ejercicios">
            <div className="row gx-5">
                <div className="col-sm-4">
                    <div className="card card_ejercicios">
                        <div className="card-body">
                            <h5 className="card-title">Ejercicio de respiracion 4,7,8</h5>
                            <p className="card-text">
                                Técnica para ayudar a calmar el estrés y conciliar el sueño
                            </p>
                        </div>
                        <div className="card-footer">
                            <NavLink className="boton_next text-light nav-link" to="/ejercicio-respiracion">
                                <button className="btn btn_next btn-9 custom-btn" >
                                    Empieza
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card card_ejercicios">
                        <div className="card-body">
                            <h5 className="card-title">Pies en la Tierra</h5>
                            <p className="card-text">
                                Ejercicio para ayudarte a conectarte con tu cuerpo y con el presente.
                            </p>

                        </div>
                        <div className="card-footer">
                                <NavLink className="boton_next text-light nav-link" to="/grounding">
                            <button className="btn btn_next btn-9 custom-btn" >
                                    Empieza
                            </button>
                                </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card card_ejercicios">
                        <div className="card-body">
                            <h5 className="card-title">Aleja tus miedos pintando</h5>
                            <p className="card-text">
                                Dibuja toda la pantalla con colores aleatorios.
                            </p>

                        </div>
                        <div className="card-footer">
                                <NavLink className="boton_next text-light nav-link" to="/sketchPage">
                            <button className="btn btn_next btn-9 custom-btn" >
                                    Empieza
                            </button>
                                </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

