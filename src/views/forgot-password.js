import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {

    const [formPassword, setFormPassword] = useState({
        password1: "",
        password2: ""
    });

    const { emailToken } = useParams();
    console.log(emailToken);

    const [succeed, setSucceed] = useState(false);

    const [isValidPassword, setIsValidPassword] = useState(true);

    const validatePassword = (password) => {
        let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-./]).{8,}$/;
        return passwordRegex.test(password)
    };

    const checkPassword = () => {

        if (formPassword.password1 !== formPassword.password2) return false;
        return validatePassword(formPassword.password1) && validatePassword(formPassword.password2);
    };

    const handleChange = ({ target }) => {
        setFormPassword({
            ...formPassword,
            [target.name]: target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!checkPassword()) {
            setIsValidPassword(false);
            return;
        }
        fetch(`${process.env.REACT_APP_API_URL}/api/reset-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: formPassword.password1,
                emailToken
            })
        })
            .then((resp) => resp.json())
            .then((data) => console.log(data));

        setSucceed(true);
    };

    return (
        <div className="container d-flex py-5 justify-content-center col-4 card p-5 mt-4">
            {
                !succeed ?
                    <form onSubmit={handleSubmit} className="row">
                        {isValidPassword ||
                            <div className="alert alert-danger wrap-text" role="alert">
                                <p>
                                    Verifique que su contraseña coincida.
                                </p>
                                <p>
                                    Debe contener 8 mínimo 8 caracteres, al menos una mayúscula, minúscula, un número y carácter especial.
                                </p>
                            </div>
                        }
                        <h1>Escriba su nueva contraseña</h1>
                        <hr />
                        <label htmlFor="password1">Contraseña</label>
                        <input
                            type="password"
                            name="password1"
                            id="password1"
                            value={formPassword.password1}
                            onChange={handleChange}
                        />
                        <label htmlFor="password2">Repita la nueva contraseña</label>
                        <input
                            type="password"
                            name="password2"
                            id="password2"
                            value={formPassword.password2}
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-primary mt-3">Cambiar contraseña</button>
                    </form>
                    :
                    <div>
                        <div className="text-center my-5">
                            <h1>Su contraseña ha cambiado exitosamente</h1>
                        </div>

                        <footer className="text-center">
                            <hr />
                            <p><Link to="/login">Iniciar sesión</Link></p>
                        </footer>
                    </div>
            }

        </div>
    )
}
