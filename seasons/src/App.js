import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    // this is the ONLY time the state should be assigned directly
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => console.log(err)
    );
  }

  render() {
    return <div> Location: {this.state.lat}</div>;
  }
}

export default App;
