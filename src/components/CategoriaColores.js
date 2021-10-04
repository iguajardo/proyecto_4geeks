import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import '../styles/boxcolors.css'

export const CategoriaColores = () => {

    const { store } = useContext(Context)

    return (
        <div className="mb-3 box-colors">
            {
                Object.keys(store.categorias).map((categoria) => {
                    return (
                        <div key={categoria} className="radio-container mb-2">
                            <input
                                type="radio"
                                name="flexRadioDefault"
                                id={categoria}
                                value={categoria}
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
            <button className="btn btn-outline-primary mt-2 w-100">Ver notas</button>
        </div>
    )
}
