import React, { useContext } from 'react';
import Notas from '../components/Notas'
import Calendario from '../components/calendario'
import { NavPerfil } from '../components/NavPerfil';
import { Route } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../store/appContext";


const Perfil = () => {

    const { store } = useContext(Context)
  
    return (
        <div className="container">
            <div className=" d-flex justify-content-center flex-column align-items-center m-4">
                <div className="imagen rounded-circle" style={{ background: "black", width: "100px", height: "100px" }}>
                </div>
                <div className="text-center">
                    <h3>{store.nombre_usuario}</h3>
                    <p>{store.user_email}</p>
                </div>
            </div>
            <NavPerfil />
            <Route exact path="/perfil" component={Notas} />
            <Route exact path="/perfil/calendario" component={Calendario} />
        </div>
    )
}

export default Perfil