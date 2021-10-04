import React, { useEffect } from 'react';
import Notas from '../components/notas'
import Calendario from '../components/calendario'



const Perfil = () => {

    

    return (
        <>
            <div className="container">
                <div className=" d-flex justify-content-center flex-column align-items-center m-4">
                    <div className="imagen rounded-circle" style={{ background: "black", width: "100px", height: "100px" }}>
                    </div>
                    <div className="text-center">
                        <h3>Nombre</h3>
                        <p>Datos de Usuario</p>
                    </div>
                </div>
                <div>
                    <nav>
                        <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                            <button
                                className="nav-link active"
                                id="nav-home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-home"
                                type="button"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                            >
                                Notas
                            </button>
                            <button
                                className="nav-link"
                                id="nav-profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profile"
                                type="button"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                            >
                                Calendario
                            </button>
                            
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                        >
                            <Notas/>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                        >
                            <Calendario/>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-contact"
                            role="tabpanel"
                            aria-labelledby="nav-contact-tab"
                        >
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil