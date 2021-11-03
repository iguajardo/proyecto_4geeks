import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';


const Modal = () => {
    const { store, actions } = useContext(Context);
    const { postNota } = actions;
    const [note, setNote] = useState({
        titulo: "",
        contenido: "",
        categoria: ""
    })


    const handleSubmit = e => {
        e.preventDefault();
        if (note.titulo.trim() === '') {
            alert("Debe ingresar un titulo")
            return;
        }
        if (note.contenido.trim() === '') {
            alert("Debe ingresar un contenido")
            return;
        }
        postNota(note.titulo, note.contenido, note.categoria)
        setNote({ titulo: "", contenido: "", categoria: "" })

    }

    const handleChange = ({ target }) => {
        setNote({
            ...note,
            [target.name]: target.value
        })
    }

    return (

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
                        <form id="addnotesmodalTitle" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">
                                    Titulo
                                </label>
                                <input type="text" className="form-control" id="titulo" name="titulo" value={note.titulo} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="col-form-label" >
                                    Nota
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    name="contenido"
                                    value={note.contenido}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-check mb-3">

                                {
                                    Object.keys(store.categorias).map((categoria) => {
                                        return (
                                            <div key={categoria} className="radio-container mb-2">
                                                <input
                                                    type="radio"
                                                    name="categoria"
                                                    id={categoria}
                                                    value={categoria}
                                                    onChange={handleChange}
                                                />
                                                <label className="fake-radio me-2" style={{ backgroundColor: store.categorias[categoria] }} htmlFor={categoria}>
                                                    <div>
                                                        ✓
                                                    </div>
                                                </label>
                                                <label className="form-check-label" htmlFor={categoria}>
                                                    {categoria}
                                                </label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button type="button" className="btn btn-danger me-3" data-bs-dismiss="modal">
                                Descartar
                            </button>
                            <button
                                id="btn-n-save"
                                data-bs-dismiss="modal"
                                className="float-left btn btn-success"
                                type="submit"
                            >
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal

