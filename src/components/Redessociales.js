import React from "react";

import logo from '../img/logo.png'

const Redessociales = () => {
    return (
        <section className="flex-container">

            <div className="section" id="redesSociales">
                <div className="item">
                    <img id="logoSerenity" src={logo} />
                    <h3>« Un respiro a la vez »</h3>
                </div>
                <div className="item" id="iconosRedes">
                    <h3>Búscanos en redes sociales</h3>
                    <div className="iconos">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Redessociales

