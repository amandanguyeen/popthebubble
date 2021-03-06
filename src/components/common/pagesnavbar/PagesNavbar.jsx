import React, { Component } from "react";
import "./PagesNavbar.css";

class PagesNavbar extends Component {
  render() {
    return (
      <section className="pages-navbar">
        <a href="/popthebubble/" className="navbar-item">
          {this.props.firstLink}
        </a>
        <a href="/popthebubble/" className="navbar-item">
          {this.props.secondLink}
        </a>
        <a href="/popthebubble/" className="navbar-item">
          {this.props.thirdLink}
        </a>
      </section>
    );
  }
}

export default PagesNavbar;
