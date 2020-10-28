import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./views/Login"
import Home from "./views/Home"

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />  
                <Route path="/home" component={Home} />    
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;