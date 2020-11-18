import React, { Component } from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  renderSubmit = (value) => {
    return value === "english" ? "Submit" : "Gönder";
  };

  renderColor = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value.language)}
        </LanguageContext.Consumer>
      </button>
    );
  };
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderColor(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
