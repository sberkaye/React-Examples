import React, { Component } from "react";

import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag uk"
          onClick={() => this.context.handleLanguageChange("english")}
        />
        <i
          className="flag tr"
          onClick={() => this.context.handleLanguageChange("turkish")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
