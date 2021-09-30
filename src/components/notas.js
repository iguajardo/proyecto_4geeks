import React from 'react';
import '../styles/card.css'


const Notas = () => {

    return (
        <>
            <div className="page-content container note-has-grid">
                <ul className="nav nav-pills p-3 bg-white mb-3 rounded-pill align-items-center">
                    <li className="nav-item">
                        <a
                            href="javascript:void(0)"
                            className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active"
                            id="all-category"
                        >
                            <i className="icon-layers mr-1" />
                            <span className="d-none d-md-block">Notas</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="javascript:void(0)"
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
                        <div className="col-md-4 single-note-item all-category" style={{}}>
                            <div className="card card-body">
                                <span className="side-stick" />
                                <h5
                                    className="note-title text-truncate w-75 mb-0"
                                    data-noteheading="Book a Ticket for Movie"
                                >
                                    Book a Ticket for Movie{" "}
                                    <i className="point fa fa-circle ml-1 font-10" />
                                </h5>
                                <p className="note-date font-12 text-muted">11 March 2009</p>
                                <div className="note-content">
                                    <p
                                        className="note-inner-content text-muted"
                                        data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
                                    >
                                        Blandit tempus porttitor aasfs. Integer posuere erat a ante
                                        venenatis.
                                    </p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="mr-1">
                                        <i className="fa fa-star favourite-note" />
                                    </span>
                                    <span className="mr-1">
                                        <i className="fa fa-trash remove-note" />
                                    </span>
                                    <div className="ml-auto">
                                        <div className="category-selector btn-group">
                                            <a
                                                className="nav-link dropdown-toggle category-dropdown label-group p-0"
                                                data-toggle="dropdown"
                                                href="#"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                            >
                                                <div className="category">
                                                    <div className="category-business" />
                                                    <div className="category-social" />
                                                    <div className="category-important" />
                                                    <span className="more-options text-dark">
                                                        <i className="icon-options-vertical" />
                                                    </span>
                                                </div>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right category-menu">
                                                <a
                                                    className="note-business badge-group-item badge-business dropdown-item position-relative category-business text-success"
                                                    href="javascript:void(0);"
                                                >
                                                    <i className="mdi mdi-checkbox-blank-circle-outline mr-1" />
                                                    Business
                                                </a>
                                                <a
                                                    className="note-social badge-group-item badge-social dropdown-item position-relative category-social text-info"
                                                    href="javascript:void(0);"
                                                >
                                                    <i className="mdi mdi-checkbox-blank-circle-outline mr-1" />{" "}
                                                    Social
                                                </a>
                                                <a
                                                    className="note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger"
                                                    href="javascript:void(0);"
                                                >
                                                    <i className="mdi mdi-checkbox-blank-circle-outline mr-1" />{" "}
                                                    Important
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                <form id="id="addnotesmodalTitle>
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

{/*   
    <div>
    <div className="card text-dark bg-light m-3" >
        <div className="card-header">Header</div>
        <div className="card-body">
            <h5 className="card-title">Titulo de Nota</h5>
            <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <textarea contenteditable="true" ></textarea>
        </div>
    </div>
</div> */}
