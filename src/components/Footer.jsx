import React, { Component } from "react";
import "./styles/Footer.scss";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="footer-box">
        <p id="copyright">2020 © We Are Marketing</p>
        <img
          className="logo-footer"
          src="https://hubspot-partners-prod.s3.amazonaws.com/thumbnails/427994/500.jpeg"
          alt="WAM We Are Marketing"
        />
      </div>
    );
  }
}

export default Footer;
