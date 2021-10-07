import React from "react";

import logo from '../img/logo.png'

const Redessociales = () => {
    return (
        <section id="redessociales">
            <div className="containerb">
                <div className="contenedorRedes">
                    <img id="logoGrande" src={logo} />
                    <h3 className="mt-3"> « Un respiro a la vez » </h3>
                    <div className="social-icons mt-3">
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