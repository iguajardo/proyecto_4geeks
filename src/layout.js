import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import injectContext from './store/appContext';
import Register from './views/Register';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Login from './views/Login';
import Perfil from './views/Perfil';
import { PrivateRoute } from './rutas/PrivateRoute';
import { EjercicioRespiracion } from './views/EjercicioRespiracion';
import { Grounding } from './views/Grounding';

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/ejercicio-respiracion" component={EjercicioRespiracion} />
                <Route exact path="/" component={Home} />
                <Route exact path="/grounding" component={Grounding} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute path="/perfil" component={Perfil} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);