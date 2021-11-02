import React from "react";

import logo from '../img/logo.png'

const Redessociales = () => {
  return (
    <section id="redesSociales">
      <div className="container">
        <div className="row">

          <div className="serenity col-md-6 col-12">
            <img id="logoGrande" src={logo} />
            <h3 className="mt-3"> « Un respiro a la vez » </h3>
          </div>

          
            <div className="rrss col-md-6 col-12 mt-3">
            <h4 className="mb-3"> Búscanos en nuestras redes sociales </h4>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              </div>
            </div>
          

        </div>
      </div>
    </section>
  )
}

export default Redessociales

