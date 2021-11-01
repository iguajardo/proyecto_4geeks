import React from "react";
import joyride from "../img/joyride.svg"

const Descripcion = () => {
    return (
        <section className="flex-container">

            <div class="section" id="descripcion">
                <div class="item">
                    <img src={joyride} alt="ride" id="rideimg" />
                </div>

                <div class="item" id="textos">
                    <div class="titulo">
                        <h1>¿Por qué creamos Serenity?</h1>
                    </div>
                    <div class="subtitulo">
                        <h3>
                            En un esfuerzo por ayudar a disminuir los niveles de ansiedad y
                            mejorar la salud mental de las personas es que desarrollamos
                            Serenity; una plataforma que reúne una serie de ejercicios de
                            relajación, los cuales han sido estudiados, seleccionados y
                            recomendados por profesionales en el área.
                        </h3>

                        <p>
                            ¡Podemos ayudarte a recuperar tu tranquilidad y paz mental con solo
                            hacer click en un botón!
                        </p>
                        <p>
                            Registrarte y crear tu perfil en Serenity te permite además llevar
                            un registro de tu estado de ánimo día a día, escribir tus
                            pensamientos, sentimientos y sensaciones para que puedas revisarlos
                            en cualquier momento.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Descripcion

