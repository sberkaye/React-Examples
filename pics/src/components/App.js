import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const API_KEY = "xu0R1waxPFepszw9ckdudoIur4YnG7lo2QlpB-n-Tjk";

class App extends React.Component {
  handleSubmitSearch = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSubmitSearch} />
      </div>
    );
  }
}

export default App;
