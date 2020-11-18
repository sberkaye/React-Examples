import React, { Component } from "react";

import UserCreate from "./UserCreate";

class App extends Component {
  state = { language: "english" };
  handleLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag uk"
            onClick={() => this.handleLanguageChange("english")}
          />
          <i
            className="flag tr"
            onClick={() => this.handleLanguageChange("turkish")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
