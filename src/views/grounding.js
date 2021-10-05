import React, { useState } from 'react'
import watch from '../img/watch.png'
import listen from '../img/listen.png'
import taste from '../img/taste.png'
import smell from '../img/smell.png'
import touch from '../img/touch.png'
import mindfull from '../img/mindfull.png'
import { NavLink, withRouter, Link } from 'react-router-dom';

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
                        <img src={mindfull} className="d-flex w-50 m-auto" />
                        <h4 className="text-center text-dark"> Bienvenido al ejercicio Pies en la Tierra</h4>
                    </div>
                    <div className="carousel-item ">
                        <img src={watch} className="d-flex w-50 m-auto" />
                        <h3 className="text-center text-dark">Identifica 5 cosas que puedas mirar</h3>
                    </div>
                    <div className="carousel-item">
                        <img src={listen} className="d-flex w-50 m-auto" />
                        <h3 className="text-center text-dark">Identifica 4 cosas que puedas escuchar</h3>
                    </div>
                    <div className="carousel-item">
                        <img src={touch} className="d-flex w-50 m-auto" />
                        <h3 className="text-center text-dark">Identifica 3 cosas que puedas tocar</h3>
                    </div>
                    <div className="carousel-item">
                        <img src={smell} className="d-flex w-50 m-auto" />
                        <h3 className="text-center text-dark">Identifica 2 cosas que puedas oler </h3>
                    </div>
                    <div className="carousel-item">
                        <img src={taste} className="d-flex w-50 m-auto" />
                        <h3 className="text-center text-dark">Identifica 1 cosas que puedas saborear</h3>
                    </div>

                </div>
                <div className="row justify-content-center m-3">
                    <button className="btn btn-light col-md-2" type="button" data-bs-slide-to="1" data-bs-target="#carouselExampleFade">
                        <i className="fas fa-redo-alt p-0 text-primary"></i>
                    </button>
                    <button className="btn btn-light col-md-2 ">
                        <NavLink className="btn_perfil nav-link" to="/ejercicio-respiracion">
                            Ejercicio de Respiración
                        </NavLink>
                    </button>
                    <button className="btn btn-light col-md-2">
                        <NavLink className="btn_perfil nav-link" to="/">
                            Me siento mejor!
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
