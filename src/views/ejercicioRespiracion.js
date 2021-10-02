import React from 'react'
import { EjercicioResp } from '../components/ejercicioresp'


export const ejercicioRespiracion = () => {
    return (
        <div className="container pt-5 ">
            <div className="row ">
                <div className="col-md-12 col-lg-6 textoejerc my-3">
                    <h1 className="text-center mb-4">Ejercicio de Relajación 4,7,8</h1>
                    <p>Estos son los tres pasos más importantes del ejercicio:</p>
                    <ul>
                        <li>Cierra tu boca e inhala el aire a través de la nariz. Cuenta hasta cuatro</li>
                        <li>Aguanta la respiración durante siete segundos.</li>
                        <li>Espira completamente el aire de tus pulmones durante ocho segundos.</li>
                    </ul>
                </div>
                <div className="col-md-12 col-lg-6 d-flex justify-content-center my-3">
                     <EjercicioResp/>
                </div>
            </div>
        </div>
    )
}
