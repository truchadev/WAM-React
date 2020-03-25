import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Payment from "./container/Payment";
import Confirmation from "./container/Confirmation";
import { Component } from "react";

class Router extends Component {

    render() {

    return(
    <BrowserRouter>
        <Switch>
           <Route path='/payment' component={Payment} />
           <Route path='/confirmation' exact component={Confirmation} />
        </Switch>
    </BrowserRouter>
    )
}
}

export default Router;
