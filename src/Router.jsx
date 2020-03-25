import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Payment from "./container/Payment";

function Router(){

    return(
    <BrowserRouter>
        <Switch>
           <Route path='/' component={Payment} />
        </Switch>
    </BrowserRouter>
    )
}

export default Router;