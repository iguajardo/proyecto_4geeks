import React from 'react'
import watchsvg from '../img/watchsvg.svg'
import listensvg from '../img/listensvg.svg'
import tastesvg from '../img/tastesvg.svg'
import smellsvg from '../img/smellsvg.svg'
import touchsvg from '../img/touchsvg.svg'
import mindfullsvg from '../img/mindfullsvg.svg'
import congrats from '../img/congrats.svg'
import { NavLink } from 'react-router-dom';

import '../styles/carrusel.css'

export const Grounding = () => {

    return (
        <div className="container">
            <div
                id="carouselExampleFade"
                className="carousel slide "
                data-bs-pause={true}
                data-bs-ride={false}
                data-bs-wrap={false}
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="mb-3 bg-transparent" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-5 d-flex flex-row-reverse">
                                    <img src={mindfullsvg} className="d-flex " alt="" />
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="card-body">
                                        <h4 className="text-center text-dark"> Bienvenido al ejercicio Pies en la Tierra</h4>
                                        <p className="card-text">
                                        Este ejercicio te ayudará a mantenerte “en el momento” cuando tu mente y cuerpo quieran regresar a momentos de trauma o estrés.<br /> Así que, ve a un lugar tranquilo y sigue nuestras instrucciones.
                                        </p>
                                        <p class="card-text text-end"><small class="text-muted">Haz click aquí para continuar ➜</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="mb-3 bg-transparent" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-5  d-flex flex-row-reverse">
                                    <img src={watchsvg} className="d-flex" alt="" />
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="card-body pasos">
                                        <h3 className="text-center text-dark">Identifica 5 cosas que puedas mirar</h3>
                                        <p className="card-text">
                                            Busca a tu alrededor y nombra 5 cosas que puedas mirar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="mb-3 bg-transparent" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-5 d-flex flex-row-reverse">
                                    <img src={listensvg} className="d-flex" alt="" />
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="card-body pasos">
                                        <h3 className="text-center text-dark">Identifica 4 cosas que puedas escuchar</h3>
                                        <p className="card-text">
                                            Cierra los ojos, presta atención a los sonidos a tu alrededor y trata de identificar 4 de ellos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="mb-3 bg-transparent" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-5 d-flex flex-row-reverse">
                                    <img src={touchsvg} className="d-flex" alt="" />
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="card-body pasos">
                                        <h3 className="text-center text-dark">Identifica 3 cosas que puedas tocar</h3>
                                        <p className="card-text">
                                            Ahora, busca objetos que tengas cerca y puedas tocar, identifica tres de ellos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="mb-3 bg-transparent" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-5 offset-1 d-flex flex-row-reverse">
                                    <img src={smellsvg} className="d-flex" alt="" />
                                </div>
                                <div className="col-md-3  d-flex align-items-center">
                                    <div className="card-body pasos">
                                        <h3 className="text-center text-dark">Identifica 2 cosas que puedas oler </h3>
                                        <p className="card-text">
                                            Trata de concentrarte en tu olfato, y reconoce dos oles que puedas percibir.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="mb-3 bg-transparent" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-5 d-flex flex-row-reverse">
                                    <img src={tastesvg} className="d-flex" alt="" />
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="card-body pasos">
                                        <h3 className="text-center text-dark">Identifica 1 cosas que puedas saborear</h3>
                                        <p className="card-text">
                                            Por último, distingue un sabor y detállalo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="mb-3 bg-transparent" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-5 d-flex flex-row-reverse">
                                    <img src={congrats} className="d-flex" alt="" />
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="card-body pasos">
                                        <h3 className="text-center text-dark">Lo Lograste!!</h3>
                                        <p className="card-text">
                                            Felicidades por entregarte a este espacio de cuidado, esperamos que te haya servido para centrar tu mente en el presente.
                                            Si lo deseas, puedes volver a nuestro ejercicio de respiracion para finalizar.<br />
                                            Vuelve cuando nos necesites.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center m-3">
                    <button className="btn btn_next btn-9 custom-btn  col-md-2 m-2" type="button" data-bs-slide-to="1" data-bs-target="#carouselExampleFade" style={{width:"140px",height:"auto"}}>
                        <i className="fas fa-redo-alt p-0 text-light"></i>
                    </button>
                    <button className="btn btn_next btn-9 custom-btn  col-md-2 m-2 "style={{width:"140px",height:"auto"}}>
                        <NavLink className="btn_perfil nav-link text-light" to="/ejercicio-respiracion">
                            Ejercicio de Respiración
                        </NavLink>
                    </button>
                    <button className="btn btn_next btn-9 custom-btn  col-md-2 m-2" style={{width:"140px",height:"auto"}}>
                        <NavLink className="btn_perfil text-light nav-link" to="/">
                            ¡Me siento mejor!
                        </NavLink>
                    </button>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
