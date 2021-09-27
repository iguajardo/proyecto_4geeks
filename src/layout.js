import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
import Register from './views/register';
import Home from './views/home';
import NotFound from './views/notFound';



const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route component={NotFound} />
            </Switch> 
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);