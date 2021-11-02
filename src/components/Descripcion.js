import React from "react";
import joyride from "../img/joyride.svg"

const Descripcion = () => {
    return (
        <section id="descripcion1">
            
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-6 col-12 d-flex justify-content-center">
                            <img src={joyride} className="d-flex" alt="" />
                        </div>
                        <div className="col-md-6 col-12 justify-content-center">
                            <h1 className="fw-bold mb-5">¿Por qué creamos Serenity?</h1>
                            <p className="texto1-descripcion">En un esfuerzo por ayudar a disminuir los niveles de ansiedad y mejorar la salud mental de las personas es que desarrollamos Serenity; una plataforma que reúne una serie de ejercicios de relajación, los cuales han sido estudiados, seleccionados y recomendados por profesionales en el área. </p>
                            <p className="pe-1">¡Podemos ayudarte a recuperar tu tranquilidad y paz mental con solo hacer click en un botón!</p>
                            <p>Registrarte y crear tu perfil en Serenity te permite además llevar un registro de tu estado de ánimo día a día, escribir tus pensamientos, sentimientos y sensaciones para que puedas revisarlos en cualquier momento.</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default Descripcion

