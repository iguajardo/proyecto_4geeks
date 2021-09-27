import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
import Home from './views/Home';
import NotFound from './views/NotFound';



const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch> 
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);