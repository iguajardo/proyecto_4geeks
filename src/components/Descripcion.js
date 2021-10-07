import React from "react";
import joyride from "../img/joyride.svg"

const Descripcion = () => {
    return (
        <section id="descripcion1">
            <div className="row" id="desc1">
                <div className="containerb">
                    <div className="row py-5">
                        <div className="col-md-6 col-12 d-flex justify-content-center">
                            <img src={joyride} className="d-flex" alt="" />
                        </div>
                        <div className="col-md-6 col-12 justify-content-center">
                            <h1 className="fw-bold mb-3">¿Por qué creamos Serenity?</h1>
                            <p>In an effort to make the world more mentally resilient, we developed Wysa - an AI chatbot that leverages evidence-based cognitive-behavioral techniques (CBT) to make you feel heard. Blended with professional human support, Wysa provides 24/7 high-quality mental health support.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Descripcion