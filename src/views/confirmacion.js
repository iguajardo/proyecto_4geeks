import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



export const Confirmacion = () => {

    const { email } = useParams();

    return (

        <div className="container-fluid">
            <div className="text-center my-5">
                <h1>Validación exitosa</h1>
                <p><em>Tu registro ha sido confirmado a través de: <strong>'{email}'.</strong></em></p>
            </div>

            <footer className="text-center">
                <hr />
                <p><Link to="/login">Login</Link></p>
            </footer>
        </div>

    )
}
