import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Context } from '../store/appContext'
import { Route} from 'react-router-dom';


export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { store: { token } } = useContext(Context)

    return (
        <Route {...rest} component={
            props => (token ? <Component {...props} /> : <Redirect to="/"/>)
        } />
    )
}
