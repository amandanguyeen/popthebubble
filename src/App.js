import "./App.css";
import React, { Component } from "react";
import { Header, MainContent } from "./components/common";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div class="App">
        <br />
        <Header />
        <CreateButton />
        <MainContent />

        <MainContent />

        <MainContent />

        <MainContent />

        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;

class CreateButton extends Component {
  render() {
    return <button className="create-button">CREATE POST</button>;
  }
}
