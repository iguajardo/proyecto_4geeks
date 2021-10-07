import React from "react";
import treePortada from '../img/treePortada.svg'


const Portada = () => {
    return (

        <section id="portada">
            <div className="row">
                <div className="containerb">
                    <div className="row py-5">
                    <div className="titlePortada col-md-6 col-12">
                            Este es el Home de Serenity<br />Si requieres ayuda presiona el
                            botón <br />
                            <button className="panicButton mt-3">Boton de ayuda</button>
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