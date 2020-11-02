import React from "react";
import SearchBar from "./SearchBar";

const App = () => {
  handleSubmitSearch = (term) => {
    console.log(term);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={this.handleSubmitSearch} />
    </div>
  );
};

export default App;
