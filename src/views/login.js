import React from 'react';
import { useContext, useRef } from "react";
import { Context } from "../store/appContext";




const Login = () => {
    const { actions } = useContext(Context);
    const inputUsername = useRef();
    const inputPassword = useRef();

    const validateUsername = (e) => {
        e.preventDefault();
        if (inputUsername.current.value.trim() === '') {
            console.error("userName empty");
            return false;
        } else {
            return true;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await actions.loginUser(inputUsername.current.value, inputPassword.current.value);
            if (res.status === 401) {
                alert('Usuario/Contraseña no coinciden')
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div className="container d-flex py-5 justify-content-center">
                <div className="card ">
                    <div className="card-header">
                        <h3 className="text-center">Bienvenido a Serenity</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="flex-column g-3" >
                            <div className="col-md-12">
                                <label htmlFor="inputUsername" className="form-label fw-bold">
                                    Username
                                </label>
                                <input minLength="3" maxLength="100" required type="text" className="form-control" id="inputEmail" name="Email" ref={inputUsername} onChange={(e) => validateUsername(e)}/>
                            </div>
                            <div className="col-sm-12 col-md-12 mt-2">
                                <label htmlFor="password" className="form-label fw-bold">
                                    Password
                                </label>
                                <input
                                    required
                                    ref={inputPassword}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                
                                />
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-primary fw-bold mt-3" type="submit">
                                    Iniciar Sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;