import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Context } from '../store/appContext'
import { Route} from 'react-router-dom';


export const PrivateRoute = ({ component: Component, ...rest }) => {
    //const { store: { token } } = useContext(Context)
    const { store, actions, setStore } = useContext(Context);
   const { token } = store;
   
   
    console.log(store)

    return (
        <Route {...rest} component={
            props => (localStorage.getItem('userToken') !== null ? <Component {...props} /> : <Redirect to="/"/>)
        } />
    )
}
