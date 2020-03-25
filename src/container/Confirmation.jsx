import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//CSS
import "./styles/Confirmation.scss";

class Confirmation extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />

        <Fragment>
          <div className="box">
            <div className="phases-box">
              <div className="state-box">
                <p className="state-phase-check">
                  <i class="fas fa-check"></i>
                </p>
                <p className="name-phase">MIS DATOS</p>
              </div>

              <div className="state-box">
                <p className="state-phase-pay">2</p>
                <p className="name-phase">PAGO</p>
              </div>
            </div>

            <form>
              <div className="confirmation-box">
                <div className="text-info">
                  <h1>Pago del producto</h1>
                  <p>
                    Una vez efectuado el pago del producto, recibirás un email
                    con los detalles de la compra.
                  </p>
                </div>
                <div>
                  <div className="card-box">
                    <i id="card-icon" className="far fa-credit-card fa-2x"></i>
                    <h2>Tarjeta de crédito</h2>
                    <p>
                      Se redirigirá a una plataforma de pago. Se trata de un
                      proceso seguro. Puede que la validación del pago tarde 24
                      horas en completarse.
                    </p>
                    <img
                      id="cards-img"
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                  <div className="buttons-box">
                    <Link to={"/payment"}>
                      <button className="button-form-back">
                        <i class="far fa-arrow-alt-circle-left fa-1.5x"></i>
                        Anterior
                      </button>
                    </Link>
                    <Link to={"/paid"}>
                    <button class="button-form" type="button">
                      Continuar <i class="far fa-arrow-alt-circle-right"></i>  
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

export default Confirmation;
