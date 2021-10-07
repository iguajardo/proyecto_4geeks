import React from "react";
import treePortada from '../img/treePortada.svg'


const Portada = () => {
    return (

        <section id="portada">
            <div className="row">
                <div className="containerb">
                    <div className="row py-5">
                    <div className="titlePortada col-md-6 col-12">
                            <h1>Bienvenido a Serenity</h1>
                            <h2>Te ayudamos a disminuir tus nivelesde ansiedad.</h2>
                            <p>¿Quieres sentirte más relajado? Estás a un click de iniciar esta experiencia. Rápido, simple y disponible para ti 24/7</p>
                            <p>¡Comencemos!</p>
                            <button className="panicButton mt-3">Hazme Click</button>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src={treePortada} className="d-flex" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default Portada