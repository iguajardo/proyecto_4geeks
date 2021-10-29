import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import injectContext from './store/appContext';
import Register from './views/register';
import Home from './views/home';
import NotFound from './views/notFound';
import Login from './views/login';
import Perfil from './views/perfil';
import { PrivateRoute } from './rutas/PrivateRoute';
import { EjercicioRespiracion } from './views/ejercicioRespiracion';
import { Grounding } from './views/grounding';
import { PublicRoute } from './rutas/PublicRoute';
import {Ejercicios} from './views/ejercicios';
import {ColorCanvas} from './views/coloredScreen';


const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <PublicRoute exact path="/register" component={Register} />
                <PublicRoute exact path="/login" component={Login} />
                <Route exact path="/ejercicios" component={Ejercicios}/>
                <Route exact path="/ejercicio-respiracion" component={EjercicioRespiracion} />
                <Route exact path="/" component={Home} />
                <Route exact path="/grounding" component={Grounding} />
                <Route exact path="/sketchPage" component={ColorCanvas}/>
                <PrivateRoute path="/perfil" component={Perfil} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);