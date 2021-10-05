import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import '../styles/card.css'
import { FaStar, FaTrash } from 'react-icons/fa';
import Modal from './Modal'



const Notas = () => {
    const { store, actions, setStore } = useContext(Context);
    const { notas, categorias } = store;
    
    const [readyToDelete, setReadyToDelete] = useState(true);

    return (
        <>
            <div className="page-content container note-has-grid">

                <ul className="nav nav-pills p-3 bg-white mb-3 rounded-pill align-items-center">
                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active"
                            id="all-category"
                        >
                            <i className="icon-layers mr-1" />
                            <span className="d-none d-md-block">Notas</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
                            id="note-business"
                        >
                            {" "}
                            <i className="icon-briefcase mr-1" />
                            <span className="d-none d-md-block">Feliz</span>
                        </a>
                    </li>
                    <li className="nav-item ms-auto">
                        <button
                            type="button"
                            className="btn btn-primary rounded-pill d-flex align-items-center px-3"
                            id="add-notes"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            {" "}
                            <i className="icon-note m-1" />
                            <span className="d-none d-md-block font-14">Crear nota</span>
                        </button>
                    </li>
                </ul>
                <div className="tab-content bg-transparent">
                    <div id="note-full-container" className="note-has-grid row">
                        {
                            notas.length === 0 ? (
                                <div >
                                    <span>Sin Notas</span>
                                </div>
                            ) :
                                !!notas &&
                                notas.map((notas, index) => {
                                    const { titulo, contenido, categoria, fecha } = notas;
                                    const  newfecha = new Date(fecha)
                                    return (
                                        <div className="col-md-4 single-note-item all-category" key={index} >
                                            <div className="card card-body">
                                                <span className="side-stick" style={{background: store.categorias[categoria]}} />
                                                <h5
                                                    className="note-title text-truncate w-75 mb-0"
                                                    data-noteheading="Book a Ticket for Movie"
                                                >
                                                    {titulo}
                                                    <i className="point fa fa-circle ms-1 fs-6" style={{color: categorias[categoria]}} />
                                                </h5>
                                                <p className="note-date text-muted">{newfecha.toLocaleDateString()}</p>
                                                <div className="note-content">
                                                    <p
                                                        className="note-inner-content text-muted"
                                                        data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
                                                    >
                                                        {contenido}
                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <button className="mr-1" onClick={(e) => {
                                                        e.target.disabled = true
                                                        console.log(e)
                                                        actions.borrarNota(notas.id)

                                                    }
                                                    } style={{ cursor: "pointer" }}>
                                                        <FaTrash style={{ color: "#FF9AA2" }} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
                <Modal />
            </div>
        </>

    )
}

export default Notas

