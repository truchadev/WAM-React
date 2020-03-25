import React, { Component } from "react";
import './styles/Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="header-box">
        <img
          className="logo"
          src="https://hubspot-partners-prod.s3.amazonaws.com/thumbnails/427994/500.jpeg"
          alt="WAM We Are Marketing"
        />
        
        <div className="menu">
          <a className="a-menu" href="/">
            <i className="far fa-file-alt"></i> AYUDA
          </a>
          <a className="a-menu" href="/">
            <i className="far fa-user"></i> SIGN IN
          </a>
          <a className="a-menu" href="/">
            ES
            <i className="fas fa-sort-down"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
