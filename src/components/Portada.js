import React from "react";
import Arbol from '../img/Arbol.png'
import { NavLink } from 'react-router-dom';


const Portada = () => {
  return (

        <section id="portada">

            <div className="container">
                <div className="row">
                    <div className="textoPortada col-md-6 col-12">
                        <h1 className="bienvenida">Bienvenido a Serenity</h1>
                        <p className="subtitulo">Te ayudamos a disminuir tus niveles de ansiedad.</p>

                        <p className="parrafo">¿Quieres sentirte más relajado? Estás a un click de iniciar esta experiencia. Rápido, simple y disponible para ti 24/7</p>
                        
                        <div className="btn_perfil">
                        <p>¡Comencemos!</p>
                        <NavLink className="btn_perfil nav-link" to="/ejercicio-respiracion">
                            <button type="button" className="panicButton mt-3 btn-light">
                                Ayúdame
                            </button>
                        </NavLink>
                        </div>
                    </div>
                    <div className="arbol col-md-6 col-12">
                        <img src={Arbol} className="d-flex" alt="" />
                    </div>
                </div>
            </div>

        </section>



  )
}

export default Portada