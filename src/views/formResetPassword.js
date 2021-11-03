import React, { useState } from 'react'

export const FormResetPassword = () => {

    const [email, setEmail] = useState("");
    const [enviado, setEnviado] = useState(false);

    const handleChange = ({ target }) => {
        setEmail(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/api/reset-by-mail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })
            .then((resp) => resp.json())
            .then((data) => console.log(data));
        setEnviado(true);
    };

    return (
        <div className="container col-4 my-4 card p-4">
            {
                enviado &&
                <div className="alert alert-success" role="alert">
                    Correo enviado, por favor, verifique su bandeja de entrada.
                </div>
            }
            <h1>Reiniciar contraseña</h1>
            <p>Por favor, indique su correo electrónico para poder reiniciar la contraseña</p>
            <form className="form-control" onSubmit={handleSubmit}>
                <label htmlFor="emailInput">Correo electrónico</label>
                <input className="form-control" type="email" onChange={handleChange} value={email} />
                <button className="btn btn-primary my-3" type="submit">Reiniciar contraseña</button>
            </form>
        </div>
    )
}
