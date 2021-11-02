import React from "react";
import treePortada from '../img/treePortada.svg'
import { NavLink } from 'react-router-dom';


const Portada = () => {
  return (

        <section id="portada">

            <div className="container">
                <div className="row">
                    <div className="titlePortada col-md-6 col-12">
                        <h1>Bienvenido a Serenity</h1>
                        <h2>Te ayudamos a disminuir tus niveles de ansiedad.</h2>
                        <p>¿Quieres sentirte más relajado? Estás a un click de iniciar esta experiencia. Rápido, simple y disponible para ti 24/7</p>
                        <p>¡Comencemos!</p>
                        <NavLink className="btn_perfil nav-link" to="/ejercicio-respiracion">
                            <button type="button" className="panicButton mt-3 btn-light">
                                Hazme Click
                            </button>
                        </NavLink>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src={treePortada} className="d-flex" alt="" />
                    </div>
                </div>
            </div>

        </section>



  )
}

export default Portada