import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PagesHeader, PagesNavbar } from "./components/common";
import "./App.css";

class ReadPost extends Component {
  render() {
    return (
      <div class="read-post-page">
        <br />
        <PagesHeader />
        <br />
        <TitleBlock />

        <CommentBlock />

        <CommentBlock />

        <CommentBlock />

        <CommentBlock />

        <CommentBlock />

        <CommentBlock />
      </div>
    );
  }
}

export default ReadPost;

class TitleBlock extends Component {
  render() {
    return (
      <section>
        <ol className="title-reading-block">
          Joe Biden should proceed to launch an investigation on questionable
          events during the election.
        </ol>
      </section>
    );
  }
}

class CommentBlock extends Component {
  render() {
    return (
      <section>
        <ol className="comment-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </ol>
      </section>
    );
  }
}
