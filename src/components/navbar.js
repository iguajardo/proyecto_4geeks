import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';


const Navbar = () => {
    
    return (
        <>
            <div>
                <h1>Esto es un NAVBAR</h1>
            </div>
        </>
    )
}

export default withRouter(Navbar);