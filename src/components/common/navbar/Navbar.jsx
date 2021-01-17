
import React, { Component } from "react";
import './Navbar.css'

class Navbar extends Component {
<<<<<<< HEAD
  render() {
    return (
      <section className="navbar">
        <a href="/popthebubble/" className="main-navbar-item">
          {this.props.firstLink}
        </a>
        <a href="/popthebubble/" className="main-navbar-item">
          {this.props.secondLink}
        </a>
      </section>
    );
  }
=======
    render(){ 
        return (
            <section className = "navbar">
                <a href="/" className="navbar-item">{this.props.firstLink}</a>
                <a href="/" className="navbar-item">{this.props.secondLink}</a>
            </section>
        );
    }
>>>>>>> source
}

export default Navbar;
