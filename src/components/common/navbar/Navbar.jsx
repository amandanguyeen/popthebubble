import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <section className="navbar">
        <a href="/" className="main-navbar-item">
          {this.props.firstLink}
        </a>
        <a href="/" className="main-navbar-item">
          {this.props.secondLink}
        </a>
      </section>
    );
  }
}

export default Navbar;
