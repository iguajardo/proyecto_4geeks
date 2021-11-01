import React from "react";
import treePortada from '../img/treePortada.svg'
import { NavLink } from 'react-router-dom';


const Portada = () => {
  return (

    <section className="flex-container" >
        <div className="section" id="portada">
          <div className="item" id="textos">
            <div className="titulo">
              <h1>Bienvenido a Serenity</h1>
              <h2>Te ayudamos a disminuir tus niveles de ansiedad.</h2>
            </div>
            <div className="subtitulo">
              <p>
                ¿Quieres sentirte más relajado? Estás a un click de iniciar esta
                experiencia. Rápido, simple y disponible para ti 24/7
              </p>
            </div>
            <div className="botonSection">
              <p>¡Comencemos!</p>
              <button type="button" className="boton mt-3 btn-light">
                <NavLink
                  class="btn_perfil nav-link"
                  to="/ejercicio-respiracion"
                >
                  Ayúdame
                </NavLink>
              </button>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <img src={treePortada} className="d-flex" alt="" />
          </div>
        </div>
    </section>



  )
}

export default Portada