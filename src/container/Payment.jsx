import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styles/Payment.scss";

import { Redirect } from 'react-router-dom';

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surename: ""
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/confirmation' />
    }
}

  render() {
    return (
      <div>
        <Header />

        <Fragment>
          <div className="box">
            <div className="phases-box">
              <div className="state-box">
                <p className="state-phase1">1</p>
                <p className="name-phase">MIS DATOS</p>
              </div>

              <div className="state-box">
                <p className="state-phase2">2</p>
                <p className="name-phase">PAGO</p>
              </div>
            </div>

            <form>
              <div className="payment-box">
                <div className="text-info">
                  <h1>Mis Datos</h1>
                  <p>
                    Revisa los datos y completa aquellos pendientes antes de
                    continuar con el proceso
                  </p>
                </div>
                <div>
                  <div className="input-box">
                    <label for>Nombre</label>
                    <input type="text" onChange={(ev) => this.handleChange(ev)} />
                  </div>
                  <div className="input-box">
                    <label for>Apellidos</label>
                    <input type="text" onChange={(ev) => this.handleChange(ev)} />
                  </div>
                  <div>
                    <button class="button-form" onClick={() => this.renderRedirect()} >
                      Continuar <i class="far fa-arrow-alt-circle-right"></i>  
                    </button>
                  </div>
                </div>
              </div>
            </form>
           
          </div>
        </Fragment>
        <Footer />
      </div>
    );
  }
}

export default Payment;
