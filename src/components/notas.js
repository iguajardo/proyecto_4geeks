import React,{ useContext, useState } from 'react';
import { Context } from '../store/appContext';
import '../styles/card.css'
import { FaStar, FaTrash } from 'react-icons/fa';


const Notas = () => {
    const { store, actions, setStore } = useContext(Context);
   const { notas } = store;
    console.log("notas", store.notas)

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
                                    return (
                                        <div className="col-md-4 single-note-item all-category" key={index} >
                                            <div className="card card-body">
                                                <span className="side-stick" />
                                                <h5
                                                    className="note-title text-truncate w-75 mb-0"
                                                    data-noteheading="Book a Ticket for Movie"
                                                >
                                                    {titulo}
                                                    <i className="point fa fa-circle ml-1 font-10" />
                                                </h5>
                                                <p className="note-date font-12 text-muted">{fecha}</p>
                                                <div className="note-content">
                                                    <p
                                                        className="note-inner-content text-muted"
                                                        data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
                                                    >
                                                        {contenido}
                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-1">
                                                        <FaStar />
                                                    </span>
                                                    <span className="mr-1">
                                                        <FaTrash />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
                {/* Modal Add notes */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                            <div className="modal-header bg-info text-white">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Nueva Nota
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <form id="addnotesmodalTitle">
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">
                                            Titulo
                                        </label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message-text" className="col-form-label">
                                            Nota
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message-text"
                                            defaultValue={""}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" data-dismiss="modal">
                                    Descartar
                                </button>
                                <button
                                    id="btn-n-save"
                                    className="float-left btn btn-success"
                                >
                                    Guardar
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Notas
