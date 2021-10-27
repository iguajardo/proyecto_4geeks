import React, { useEffect } from 'react'
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

    
    useEffect(() => {
        const carrusel=document.getElementById('carouselExampleFade');
        carrusel.addEventListener('slid.bs.carousel', checkitem);
        checkitem()
    });
    
     const checkitem=()=>                        
    {   const carruselFirstSlide = document.querySelector('.carousel-inner .carousel-item:first-child')
        const carruselLastSlide = document.querySelector('.carousel-inner .carousel-item:last-child')
        const botonPrev = document.getElementsByClassName('carousel-control-prev')[0]
        const botonNext = document.getElementsByClassName('carousel-control-next')[0]
        
        if (carruselFirstSlide.classList.contains('active')) {
            
            botonPrev.classList.add('d-none')
        } else if (carruselLastSlide.classList.contains('active')) {
            
            botonNext.classList.add('d-none')
        } else {
            botonPrev.classList.remove('d-none');
            botonNext.classList.remove('d-none');
        }
    }



    return (
        <div className="containerCarrusel container">
            <div
                id="carouselExampleFade"
                className="carousel slide "
                data-bs-pause={true}
                data-bs-ride={false}
                data-bs-wrap={false}
            >
                <div className="carousel-inner" id="carousel-inner">
                    <div className="carousel-item active">
                        <div className="mb-3 bg-transparent" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-5 d-flex flex-row-reverse me-5">
                                    <img src={mindfullsvg} className="d-flex " alt="" />
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="card-body">
                                        <h4 className="text-center text-dark"> Bienvenido al ejercicio Pies en la Tierra</h4>
                                        <p className="card-text">
                                            Este ejercicio te ayudará a mantenerte “en el momento” cuando tu mente y cuerpo quieran regresar a momentos de trauma o estrés.<br /> Así que, ve a un lugar tranquilo y sigue nuestras instrucciones.
                                        </p>
                                        <p className="card-text text-end pointer" data-bs-slide-to="1" data-bs-target="#carouselExampleFade"><small class="text-danger">Haz click aquí para continuar ➜</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="mb-3 bg-transparent" >
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-5  d-flex flex-row-reverse me-5">
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
                                <div className="col-md-5 d-flex flex-row-reverse me-5">
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
                                <div className="col-md-5 d-flex flex-row-reverse me-5">
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
                                <div className="col-md-5 offset-1 d-flex flex-row-reverse me-5">
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
                                <div className="col-md-5 d-flex flex-row-reverse me-5">
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
                                <div className="imagen col-md-5 d-flex flex-row-reverse ">
                                    <img src={congrats} className="d-flex" alt="" />
                                </div>
                                <div className="col-md-4 d-flex flex-column align-items-center">
                                    <div className="card-body pasos">
                                        <h2 className="text-center text-dark">¡¡Lo Lograste!!</h2>
                                        <p className="card-text">
                                            Felicidades por entregarte a este espacio de cuidado, esperamos que te haya servido para centrar tu mente en el presente.
                                            Si lo deseas, puedes volver a nuestro ejercicio de respiración para finalizar.<br />
                                            Vuelve cuando nos necesites.
                                        </p>
                                <div className=" d-flex justify-content-center m-3">
                                    <button className="btn btn_next btn-9 custom-btn  col-md-2 m-2" type="button" data-bs-slide-to="1" data-bs-target="#carouselExampleFade" style={{ width: "140px", height: "auto" }}>
                                        Repetir Ejercicio
                                    </button>
                                    {/* <button className="btn btn_next btn-9 custom-btn  col-md-2 m-2 " style={{ width: "140px", height: "auto" }}>
                                        <NavLink className="btn_perfil nav-link text-light" to="/ejercicio-respiracion">
                                            Ejercicio de Respiración
                                        </NavLink>
                                    </button> */}
                                    <button className="btn btn_next btn-9 custom-btn  col-md-2 m-2" style={{ width: "140px", height: "auto" }}>
                                        <NavLink className="btn_perfil text-light nav-link" to="/">
                                            ¡Me siento mejor!
                                        </NavLink>
                                    </button>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <i class="fas fa-arrow-circle-left" aria-hidden="true"></i>
                    {/* <i class="fas fa-arrow-left"></i> */}
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <i class="fas fa-arrow-circle-right" aria-hidden="true"></i>
                    {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
