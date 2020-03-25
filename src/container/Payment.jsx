import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//CSS
import "./styles/Payment.scss";

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
                    <label>Nombre</label>
                    <input type="text" onChange={(ev) => this.handleChange(ev)} />
                  </div>
                  <div className="input-box">
                    <label>Apellidos</label>
                    <input type="text" onChange={(ev) => this.handleChange(ev)} />
                  </div>
                  <div>
                    <Link to={"/confirmation"}>
                    <button className="button-form" type="button">
                      Continuar <i className="far fa-arrow-alt-circle-right"></i>  
                    </button>
                    </Link>
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
