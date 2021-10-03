import React from 'react';
import Notas from '../components/Notas'
import Calendario from '../components/Calendario'
import { CategoriaColores } from '../components/CategoriaColores';
import { NavPerfil } from '../components/NavPerfil';
import { Route } from 'react-router-dom';



const Perfil = () => {
    return (
        <div className="container">
            <div className=" d-flex justify-content-center flex-column align-items-center m-4">
                <div className="imagen rounded-circle" style={{ background: "black", width: "100px", height: "100px" }}>
                </div>
                <div className="text-center">
                    <h3>Nombre</h3>
                    <p>Datos de Usuario</p>
                </div>
            </div>
            <NavPerfil />
            <Route exact to="/perfil" component={Notas} />
            <Route exact to="/perfil/calendario" component={Calendario} />
        </div>
    )
}

export default Perfil