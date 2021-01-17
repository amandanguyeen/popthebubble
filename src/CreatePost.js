import { Link } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import { PagesHeader, PagesNavbar } from "./components/common";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "What should we talk about?",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div class="create-post-page">
        <br />
        <PagesHeader />
        <br />

        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          className="create-post-box"
        />
        <br />
        <PostButton />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default CreatePost;

class PostButton extends Component {
  render() {
    return <button className="post-button">POST</button>;
  }
}
