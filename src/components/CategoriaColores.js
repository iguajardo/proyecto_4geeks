import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../store/appContext'
import '../styles/boxcolors.css'

export const CategoriaColores = ({ onChange, value }) => {

    const { store, actions } = useContext(Context)

    const handleSave = () => {
        actions.saveCalendar()
    }


    return (
        <div className="box-colors">
            {
                Object.keys(store.categorias).map((categoria) => {
                    return (
                        <div key={categoria} className="radio-container mb-2">
                            <input
                                type="radio"
                                name="flexRadioDefault"
                                id={categoria}
                                value={categoria}
                                onChange={(e) => {
                                    return value && onChange(e, value)
                                }}
                                disabled={value ? false : true}
                                checked={store.calendar[value] === categoria ? true : false}
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
            <button
                className="btn btn-primary mt-2 w-100"
                onClick={handleSave}
            >
                Guardar cambios
            </button>
        </div>
    )
}
