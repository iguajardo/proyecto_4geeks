import React from 'react';
import { EjercicioResp } from '../components/Ejercicioresp';



const Home = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center align-content-center mt-4">
                    <h1>Esto es HOME</h1>
                    <EjercicioResp />

                </div>
            </div>
        </div>
    )
}

export default Home;