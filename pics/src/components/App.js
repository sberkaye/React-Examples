import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  handleSubmitSearch = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSubmitSearch} />
        Found {this.state.images.length} results
      </div>
    );
  }
}

export default App;
