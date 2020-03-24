import React, { Component } from "react";
import './styles/Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div class="header-box">
        <img
          className="logo"
          src="https://hubspot-partners-prod.s3.amazonaws.com/thumbnails/427994/500.jpeg"
          alt="WAM We Are Marketing"
        />
        
        <div className="menu">
          <a href="/ayuda">
            <i className="far fa-file-alt"></i> AYUDA
          </a>
          <a href="/signIn">
            <i className="far fa-user"></i> SIGN IN
          </a>
          <a>
            ES
            <i className="fas fa-sort-down"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
