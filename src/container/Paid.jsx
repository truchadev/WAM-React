import React, { Component, Fragment } from "react";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//CSS
import "./styles/Paid.scss";

//Axios
import Axios from "axios";

class Paid extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount = () => {
    Axios.get("http://www.mocky.io/v2/5e3d41272d00003f7ed95c09")
      .then(res => {
        console.log(res);
        this.setState({ items: [res.data] });
      })
      .catch(error => {
        console.log(error);
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
                <p className="state-phase-check">
                  <i class="fas fa-check"></i>
                </p>
                <p className="name-phase">MIS DATOS</p>
              </div>

              <div className="state-box">
                <p className="state-phase-check">
                  <i class="fas fa-check"></i>
                </p>
                <p className="name-phase">PAGO</p>
              </div>
            </div>

            <form>
              {this.state.items.map(item => (
                <div className="paid-box"  key="paid">
                  <img src={item.img} alt="" />
                  <img src="" alt=""/>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              ))}
            </form>
          </div>
        </Fragment>
        <Footer />
      </div>
    );
  }
}

export default Paid;
