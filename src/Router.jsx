import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";

//Containers
import Payment from "./container/Payment";
import Confirmation from "./container/Confirmation";
import Paid from "./container/Paid";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/payment" component={Payment} />
          <Route path="/confirmation" exact component={Confirmation} />
          <Route path="/paid" component={Paid} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
