import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../store/appContext";

const Register = () => {
    
    const { store,actions } = useContext(Context);
    const [input, setInput] = useState({
        nombre_usuario: "",
        password: "",
        email: "",
        user_img:""
    })
    
    const [isRegister, setIsRegister] = useState({ message: "", status: "" })
    
    useEffect(() => {
        actions.getProfilePic()
    }, [])

    useEffect(()=>{
        setInput({
            ...input, user_img:store.randomUser
        })
    },[store.randomUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        let mensaje = ""
        if (!validateUsername(input.nombre_usuario)) {
            mensaje += "El usuario no debe contener caracteres especiales"
        }
        if (!validatePassword(input.password)) {
            mensaje += "\nEl password debe contener 8 caracteres, incluir mayusc,minusc,numeros y caracteres especiales"
        }
        if (mensaje.length > 0) {
            setIsRegister({ "message": mensaje, "status": "error" })
        } else {

            fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })
                .then((response) => response.json())
                .then((data) => {
                    setIsRegister(data)
                    setInput({ ...input,
                        nombre_usuario: "",
                        password: "",
                        email: ""
                    })
                })
                .catch((error) => console.log(error))
        }
    }

    const handleChange = ({ target }) => {
        setInput({
            ...input,
            [target.name]: target.value
        })
        setIsRegister({ "message": "", "status": "" })
    }

    const validatePassword = (password) => {
        let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-./]).{8,}$/;
        return passwordRegex.test(password)
    }

    const validateUsername = (nombre_usuario) => {
        let usernameRegex = /^\w{3,100}$/;
        return usernameRegex.test(nombre_usuario)
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
                            {isRegister.status === "ok" ?
                                <div className="alert alert-success" role="alert">
                                    {isRegister.message}
                                </div>
                                : isRegister.status === "error" &&
                                <div className="alert alert-danger" role="alert">
                                    {isRegister.message}
                                </div>
                            }
                            <div className="col-md-12">
                                <label htmlFor="inputUsername" className="form-label fw-bold">
                                    Nombre de Usuario
                                </label>
                                <input minLength="3" maxLength="100" required type="text" className="form-control" id="inputUsername" name="nombre_usuario" value={input.nombre_usuario} onChange={handleChange} />
                            </div>
                            <div className="col-sm-12 col-md-12 mt-2">
                                <label htmlFor="email" className="form-label fw-bold">
                                    Email
                                </label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="name@example.com"
                                    name="email"
                                    value={input.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 mt-2">
                                <label htmlFor="password" className="form-label fw-bold">
                                    Password
                                </label>
                                <input
                                    required
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={input.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-primary fw-bold">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;